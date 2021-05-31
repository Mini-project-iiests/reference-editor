import React, {Component} from 'react';
import {Button,Grid} from '@material-ui/core';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about">
        <Grid container className="px-16 py-12">
          <Grid item xs={6} className="pb-16">
            <div className="w-full flex flex-col items-center">
              <img
                className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300"
                src="/rohan.png" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Rohan Gupta</span>
                <a href="https://www.linkedin.com/in/rohan-gupta-07442917b/" target="_blank">
                  <img className="w-6" src="/linkedin.png" alt=""/>
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-600">
                UI Developer / System Designer
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="pb-16">
            <div className="w-full flex flex-col items-center">
              <img className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300" src="/sayak.png" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Sayak Rana</span>
                <a href="https://www.linkedin.com/in/sayak-rana-125a48192/" target="_blank">
                  <img className="w-6" src="/linkedin.png" alt=""/>
                </a>
                <a href="https://github.com/Mini-project-iiests/reference-editor/blob/master_sayak_ref/index.html" target="_blank">
                  <img className="w-6 ml-2" src="link.png" alt=""/>
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-600">
                Code Designer / Script Writer
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="pb-16">
            <div className="w-full flex flex-col items-center">
              <img
                className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300"
                src="/malay.png" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Malay Gain</span>
                <a href="https://www.linkedin.com/in/malay-gain-43466419a/" target="_blank">
                  <img className="w-6" src="/linkedin.png" alt=""/>
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-600">
                Code designer / Script Writer
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="pb-16">
            <div className="w-full flex flex-col items-center">
              <img
                className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300"
                src="/shivam.png" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Shivam Kumar</span>
                <a href="https://www.linkedin.com/in/shivam-kumar5502/" target="_blank">
                  <img className="w-6" src="/linkedin.png" alt=""/>
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-600">
                Report Maker / PPT Designer
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default About;
