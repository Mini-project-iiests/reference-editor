import React, {Component} from 'react';
import './home.scss';

import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      textContent: "Hello world",
      fileName: "file",
      uploaded: false
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

  render() {
    return (
      <div className="home">
        <div className="homeContainer">
          <div className="uploadWrapper"
            style={{
              "display": this.state.uploaded?"none": "flex"
            }}>
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
          <div className="textWrapper"
            style={{
              "display": this.state.uploaded?"flex": "none"
            }}
            >
            <div className="fileName">
              <span>{this.state.fileName}</span>
            </div>
            <div className="textContainer">
              <pre id="textContent">{this.state.textContent}</pre>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
