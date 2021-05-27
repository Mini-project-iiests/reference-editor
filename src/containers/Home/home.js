import React, {Component} from 'react';
import './home.scss';

import {DropzoneArea} from 'material-ui-dropzone'
import {Button,Grid,TextField} from '@material-ui/core';
import {Display} from './display';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      textContent: 'Computer science is the study of algorithmic processes.\n1. "What is Computer Science? - Computer Science.The University of York". www.cs.york.ac.uk. Retrieved June 11, 2020.',
      fileName: "CS.text",
      uploaded: false,
      refs: [
        {
          type: 0,
          title: "What is Computer Science?",
          author: "Computer Science, The University of York",
          source: "www.cs.york.ac.uk",
          date: "June 11, 2020"
        },
        {
          type: 1,
          title: "George Forsythe and the Development of Computer Science",
          author: "Donald Knuth",
          source: "wayback machine",
          date: "1972"
        },
        {
          type: 2,
          title: "What Can Be Automated? Computer Science and Engineering Research Study | The MIT Press",
          author: "The MIT Press",
          source: "mitpress.mit.edu",
          date: "August 16, 2014"
        },
        {
          type: 3,
          title: "IBM Archives: 1945",
          author: "IBM",
          source: "IBM.com",
          date: "March 19, 2019"
        },
        {
          type: 2,
          title: "Ada Lovelace | Babbage Engine",
          author: "Computer History Museum",
          source: "www.computerhistory.org",
          date: "December 28, 2016"
        },
        {
          type: 0,
          title: "The Enchantress of Numbers",
          author: "Betty Alexandra Toole Ed.D. Strawberry Press",
          source: "www.computerhistory.org",
          date: "February 10, 2006"
        },
        {
          type: 3,
          title: "The Role of the University in Computers",
          author: "Louis Fine",
          source: "dl.acm.org/doi/10.1145/1457838.1457859",
          date: "March 1959"
        },
        {
          type: 1,
          title: "Stanford University Oral History",
          author: "Stanford University",
          source: "Stanford University Press",
          date: "May 30, 2013"
        },
        {
          type: 0,
          title: "The John Gabriel Byrne Computer Science Collection",
          author: "John Gabriel Byrne",
          source: "SCSS treasures",
          date: "April 16, 2019"
        },
        {
          type: 3,
          title: "Definition of computer science",
          author: "dictionary org",
          source: "www.dictionary.com",
          date: "June 11, 2020"
        },
        {
          type: 1,
          title: "Charles Babbage, pioneer of the computer",
          author: "Anthony Hyman",
          source: "wikipedia",
          date: "1982"
        },
        {
          type: 2,
          title: "Algorithmics The Spirit of Computing",
          author: "Harel, David",
          source: "ISBN 978-3-642-44135-6. OCLC 876384882.",
          date: "August 2014"
        }
      ]
    };
  }

  updateText() {
    const reader = new FileReader()

    reader.onload = async (e) => {
      const text = (e.target.result)
      this.setState({textContent: text})
    };

    if(this.state.files[0]){
      reader.readAsText(this.state.files[0])
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
                acceptedFiles={[".txt"]}
                filesLimit={1}
                showPreviews={false}
                useChipsForPreview
                showPreviewsInDropzone={true}/>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={()=>{
                this.setState({uploaded: true})
              }}>
              Upload
            </Button>
          </div>
          {this.state.uploaded?(
            <div className="w-full p-2 grid grid-cols-3 gap-0 mb-2">
              <div className="w-full col-span-2">
                <Display
                  fileName={this.state.fileName}
                  textContent={this.state.textContent}
                />
              </div>
              <div className="w-full col-span-1">
                <div className="w-full refHalf bg-gray-200 mt-24 p-4 sticky top-4">
                  <TextField
                    className="w-full bg-gray-100 rounded filter drop-shadow-md"
                    label="Search for Reference" type="search" variant="outlined" />
                  <div className="refList w-full bg-gray-100 mt-6 px-2 filter drop-shadow-md">
                    {this.state.refs.map((ref, i)=>{
                      return(
                        <div key={i} className="refCont w-full relative h-12 p-2 bg-gray-200 mt-2 text-lg flex overflow-hidden">
                          <div className="mr-2" style={{color: this.fontColor(i+1)}}>
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
                            <EditIcon onClick={()=>{}} className="text-blue-600"/>
                            <DeleteIcon onClick={()=>{}} color="error"/>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="addCont absolute bottom-2 right-0 w-16 h-16 rounded-full bg-gray-200">
                    <AddCircleIcon
                      style={{width : "64px", height: "64px"}}
                      className="text-pink-600 absolute top-0 right-0 filter drop-shadow-lg cursor-pointer"/>
                  </div>
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
