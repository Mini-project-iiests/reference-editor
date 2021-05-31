import React, {Component} from 'react';
import './home.scss';

import {DropzoneArea} from 'material-ui-dropzone';
import {Button,Grid,TextField,Popover} from '@material-ui/core';
import {Display} from './display';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SaveIcon from '@material-ui/icons/Save';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import DoneAllIcon from '@material-ui/icons/DoneAll';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      editing: -1,
      tmpRef: {},
      anchorEl: null,
      fileContent: "",
      fileName: "demo.txt",
      uploaded: false,
      isAdding: false,
      textContent: "",
      refs: [],
      isError: false
    };
  }

  parseRef(str){
    str = str.split('.').slice(1,str.length).join('.').trim();
    var ref = {};

    str = str.split(`"`);
    ref.title = str[1].trim();
    str = str[2].split(",");
    ref.author = str[1].trim();
    ref.source = str[2].trim();
    ref.date = str.slice(3,str.length).join(",").trim();
    return ref;
  }

  parseText(){
    var str = this.state.fileContent;
    var index = str.indexOf('REFERENCES');
    if(!index) return;

    var textContent = str.substring(0,index).trim();
    var arr = str.substring(index+10,str.length-1).trim();
    arr = arr.split('\n');

    var refs = [];
    arr.forEach((e)=>{
        if(!e.trim()==false){
          refs.push(this.parseRef(e));
        }
    });

    this.setState({refs: refs, textContent: textContent});
  }

  updateText() {
    const reader = new FileReader();

    reader.onload = async (e) => {
      const text = (e.target.result);
      this.setState({fileContent: text}, ()=>{
        try{
          this.parseText();
        }catch(err){
          this.setState({isError: true}, ()=>{

          })
        }
      });
    };

    if(this.state.files[0]){
      reader.readAsText(this.state.files[0]);
    }
  }

  handleChange(files) {
    if(files[0]){
      this.setState({
        files: files,
        fileName: files[0].name
      }, () => {
        this.updateText();
      });
    }
  }

  fontColor(n){
    var a = [0,0,0];
    a[0] += Math.pow(n*(n+1)*(n+2)*11, 3)%256;
    a[1] += Math.pow((n+1)*(2*n+1)*(3*n+2)*13, 3)%256;
    a[2] += Math.pow((n+2)*(3*n+5)*(8*n+13)*17, 3)%256;

    a[0] = Math.floor(a[0]*0.6 + 0.2*256);
    a[1] = Math.floor(a[1]*0.6 + 0.2*256);
    a[2] = Math.floor(a[2]*0.6 + 0.2*256);

    return `rgb(${a[0]},${a[1]},${a[2]})`;
  }

  componentWillMount(){
    if(false){
      this.setState({isError: true}, ()=>{
        this.parseText();
      })
    }
  }

  handleClick(idx){
    this.setState({editing: idx, tmpRef: {}});
  }

  handleClose(idx){
    var tmpRef = this.state.tmpRef;
    var refs = this.state.refs;
    var ref = refs[idx];

    Object.keys(tmpRef).forEach(function(key) {
      ref[key] = tmpRef[key];
    });

    refs[idx] = ref;
    this.setState({refs:refs, editing: -1});
  }

  editRef(val, prop){
    var tmpRef = this.state.tmpRef;
    tmpRef[prop] = val;
    this.setState({tmpRef: tmpRef});
  }

  delRef(){
    var idx = this.state.anchorEl.dataset.idx;
    var refs = this.state.refs;
    var textContent = this.state.textContent;

    var prevRef = "", currRef="";
    for (var i = parseInt(idx); i < refs.length; i++) {
      currRef = `[${i+1}]`;
      textContent = textContent.replaceAll(currRef, prevRef);
      prevRef = currRef;
    }

    refs.splice(idx, 1);
    this.setState({refs:refs, textContent: textContent, anchorEl: null});
  }

  addRef(){
    var tmpRef = this.state.tmpRef;

    if(tmpRef.title && tmpRef.author && tmpRef.source && tmpRef.date){
      var refs = this.state.refs;
      refs.push(tmpRef);
      this.setState({refs: refs, tmpRef: {}, isAdding: false});
    }else{
      this.setState({isAdding: false});
    }
  }

  isSubSequence(str1, str2){
    var j = 0;
    var m = str1.length,
        n = str2.length;

    for (var i = 0; i < n && j < m; i++)
      if (str1[j] == str2[i])
        j++;

    return (j == m);
  }

  searchRef(event){
    var val = event.target.value.toLowerCase();
    var refs = this.state.refs;

    for (var i = 0; i < refs.length; i++) {
      if(
        this.isSubSequence(val,refs[i].title.toLowerCase()) |
        this.isSubSequence(val,refs[i].author.toLowerCase()) |
        this.isSubSequence(val,refs[i].source.toLowerCase()) |
        this.isSubSequence(val,refs[i].date.toLowerCase())
      ){
        refs[i].isHidden = false;
      }else{
        refs[i].isHidden = true;
      }
    }

    this.setState({refs: refs})
  }

  moveRef(dx){
    console.log(dx);
  }

  allowDrop(event){
    event.preventDefault();
  }

  dragStart(idx, event){
    // console.log(event,idx);
    event.dataTransfer.setData("idx", idx);
  }

  drop(idx, event){
    event.preventDefault();
    var idx0 = event.dataTransfer.getData("idx");
    try{
      idx0 = parseInt(idx0);
      idx = parseInt(idx);
    }catch(err){
      return;
    }

    if(idx0!=null && idx!=null && idx0!=idx){
      console.log("Okay");
      var refs = this.state.refs;
      var tmp = refs[idx];
      refs[idx] = refs[idx0];
      refs[idx0] = tmp;

      var textContent = this.state.textContent;

      textContent = textContent.replaceAll(`[${idx0+1}]`, '[0]');
      textContent = textContent.replaceAll(`[${idx+1}]`, `[${idx0+1}]`);
      textContent = textContent.replaceAll('[0]', `[${idx+1}]`);

      this.setState({refs: refs, textContent: textContent});
    }
  }

  downloadFile(){
    var fileName = this.state.fileName;
    fileName = fileName.split(".");
    fileName[0]+="_new";
    fileName = fileName.join(".");

    const blob = new Blob([document.getElementById('fileContent').innerText.trim()], {
      type: 'text/plain'
    });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }

  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <div className={(this.state.uploaded?"hidden":"flex")+" uploadWrapper"}
            >
            <div className="uploadFile">
              <DropzoneArea
                className="dropArea"
                onChange={this.handleChange.bind(this)}
                filesLimit={1}
                showPreviews={false}
                useChipsForPreview
                showPreviewsInDropzone={true}/>
            </div>
            <Button
              variant="contained"
              color="primary"
              disabled={this.state.isError || !this.state.fileContent}
              onClick={()=>{
                this.setState({uploaded: true})
              }}>
              Upload
            </Button>
            {this.state.isError?(
              <div className="text-red-600 font-bold my-8">
                The file format is not valid
              </div>
            ):null}
          </div>
          {this.state.uploaded?(
            <div className="w-full p-2 grid grid-cols-3 gap-0 mb-2">
              <div className="w-full col-span-2">
                <Display
                  fileName={this.state.fileName}
                  textContent={this.state.textContent}
                  refs={this.state.refs}
                />
              </div>
              <div className="w-full col-span-1">
                <div className="saveCont w-full p-8 flex flex-row-reverse">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.downloadFile.bind(this)}>
                    <span className="font-medium capitalize px-2">Save</span>
                  </Button>
                </div>
                <div className="w-full refHalf bg-gray-200 p-4 pb-8 sticky top-4">
                  <TextField
                    onChange={this.searchRef.bind(this)}
                    className="w-full bg-gray-100 rounded filter drop-shadow-md"
                    label="Search for Reference" type="search" variant="outlined" />
                  <div className="refList w-full bg-gray-100 mt-6 px-2 filter drop-shadow-md">
                    {!this.state.isAdding && this.state.refs.map((ref, i)=>{
                      return !ref.isHidden?(
                        <div key={i} onDrop={this.drop.bind(this, i)} onDragOver={this.allowDrop.bind(this)} className="w-full relative">
                          <div className="refCont w-full relative h-12 p-2 bg-gray-200 mt-2 text-lg flex overflow-hidden">
                            <div onDragStart={this.dragStart.bind(this, i)} className="mr-2 grabNum px-2" style={{color: this.fontColor(i+1)}}>
                              {i+1}.
                            </div>
                            <div className="refText w-full flex overflow-hidden">
                              <div className="relative w-max flex">
                                {ref.title? <span className="refTitle w-max mr-2">"{ref.title}",</span>:null}
                                {ref.author? <span className="refAuthor w-max mr-2">{ref.author},</span>:null}
                                {ref.source? <span className="refSource w-max mr-2">{ref.source},</span>:null}
                                {ref.date? <span className="refDate w-max mr-2">{ref.date}</span>:null}
                              </div>
                            </div>
                            <div className="tools absolute top-0 cursor-pointer right-0 w-16 h-full bg-gray-200 bg-opacity-80 flex items-center justify-around">
                              <EditIcon onClick={()=>{
                                this.handleClick(i);
                              }} className="text-blue-600"/>
                              <DeleteIcon data-idx={i} onClick={(event)=>{
                                this.setState({anchorEl: event.target});
                              }} color="error"/>
                            </div>
                          </div>
                          {this.state.editing==i?(
                            <div className="w-full relative p-2 bg-gray-200 mt-2">
                              <Grid container>
                                <Grid item xs={6} className="p-2">
                                  <TextField onChange={(ele)=>{
                                    this.editRef(ele.target.value, 'title');
                                  }} value={this.state.tmpRef.title || ref.title} variant="outlined" label="Title" color="primary" />
                                </Grid>
                                <Grid item xs={6} className="p-2">
                                  <TextField onChange={(ele)=>{
                                    this.editRef(ele.target.value, 'author');
                                  }} value={this.state.tmpRef.author || ref.author} variant="outlined" label="Author" color="primary" />
                                </Grid>
                                <Grid item xs={6} className="p-2">
                                  <TextField onChange={(ele)=>{
                                    this.editRef(ele.target.value, 'source');
                                  }} value={this.state.tmpRef.source || ref.source} variant="outlined" label="Source" color="primary" />
                                </Grid>
                                <Grid item xs={6} className="p-2">
                                  <TextField onChange={(ele)=>{
                                    this.editRef(ele.target.value, 'date');
                                  }} value={this.state.tmpRef.date || ref.date} variant="outlined" label="Date" color="primary" />
                                </Grid>
                                <Grid item xs={12} className="relative h-12 p-2">
                                  <SaveIcon
                                    data-idx={i}
                                    onClick = {this.handleClose.bind(this, i)}
                                    style={{width : "32px", height: "32px"}}
                                    className="text-green-600 absolute right-4 filter drop-shadow-lg cursor-pointer"/>
                                </Grid>
                              </Grid>
                            </div>
                          ):null}
                        </div>
                      ):null
                    })}
                    {this.state.isAdding? (
                      <div className="w-full relative p-2 bg-gray-200 mt-2">
                        <Grid container>
                          <Grid item xs={12} className="p-2">
                            <div className="text-lg text-blue-600">Add a new Reference</div>
                          </Grid>
                          <Grid item xs={6} className="p-2">
                            <TextField onChange={(ele)=>{
                              this.editRef(ele.target.value, 'title');
                            }} value={this.state.tmpRef.title} variant="outlined" label="Title" color="primary" />
                          </Grid>
                          <Grid item xs={6} className="p-2">
                            <TextField onChange={(ele)=>{
                              this.editRef(ele.target.value, 'author');
                            }} value={this.state.tmpRef.author} variant="outlined" label="Author" color="primary" />
                          </Grid>
                          <Grid item xs={6} className="p-2">
                            <TextField onChange={(ele)=>{
                              this.editRef(ele.target.value, 'source');
                            }} value={this.state.tmpRef.source} variant="outlined" label="Source" color="primary" />
                          </Grid>
                          <Grid item xs={6} className="p-2">
                            <TextField onChange={(ele)=>{
                              this.editRef(ele.target.value, 'date');
                            }} value={this.state.tmpRef.date} variant="outlined" label="Date" color="primary" />
                          </Grid>
                          <Grid item xs={12} className="relative h-12 p-2">
                            <DoneAllIcon
                              onClick={this.addRef.bind(this)}
                              style={{width : "56px", height: "40px", borderWidth: "3px"}}
                              className="p-1 text-green-600 absolute border-green-500 rounded-full right-4 filter drop-shadow-lg cursor-pointer"/>
                          </Grid>
                        </Grid>
                      </div>
                    ):null}
                  </div>
                  <div className="addCont absolute bottom-2 right-0 w-16 h-16 rounded-full bg-gray-200">
                    <AddCircleIcon
                      onClick={()=>{
                        this.setState({isAdding: true});
                      }}
                      style={{width : "64px", height: "64px"}}
                      className="text-pink-600 absolute top-0 right-0 filter drop-shadow-lg cursor-pointer"/>
                  </div>
                  <Popover
                    open={this.state.anchorEl!=null}
                    anchorEl={this.state.anchorEl}
                    onClose={()=>{
                      this.setState({anchorEl: null})
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}>
                    <div className="bg-gray-200 p-4 flex">
                      <div className="font-bold text-red-600 mr-4">Are you sure ?</div>
                      <CheckIcon
                        onClick={this.delRef.bind(this)}
                        className="text-green-500 mr-2 cursor-pointer"/>
                      <ClearIcon
                        onClick={()=>{
                          this.setState({anchorEl: null})
                        }}
                        className="text-red-500 cursor-pointer"/>

                    </div>
                  </Popover>
                </div>
              </div>
            </div>
          ):null}
        </div>
      </div>
    )
  }
}

export default Home;
