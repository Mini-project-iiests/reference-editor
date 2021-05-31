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
              <img className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300" src="https://media-exp1.licdn.com/dms/image/C5603AQHDc8hfsjy_9Q/profile-displayphoto-shrink_400_400/0/1591710828647?e=1628121600&v=beta&t=Bbj4ZvYtPSrminbqqhrNIyHsPXJTH-XIKgFqdFXWo60" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Rohan Gupta</span>
                <a href="https://www.linkedin.com/in/rohan-gupta-07442917b/" target="_blank">
                  <img className="w-6" src="https://static-exp1.licdn.com/sc/h/2if24wp7oqlodqdlgei1n1520" alt=""/>
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-600">
                UI Developer / System Designer
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="pb-16">
            <div className="w-full flex flex-col items-center">
              <img className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300" src="https://media-exp1.licdn.com/dms/image/C5603AQHXn5Nw8BRr9g/profile-displayphoto-shrink_400_400/0/1613160558996?e=1628121600&v=beta&t=Da7HwijJ4gzUoxNO6KcKzGy47GLmZwjva7MmGF2szj8" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Sayak Rana</span>
                <a href="https://www.linkedin.com/in/sayak-rana-125a48192/" target="_blank">
                  <img className="w-6" src="https://static-exp1.licdn.com/sc/h/2if24wp7oqlodqdlgei1n1520" alt=""/>
                </a>
                <a href="https://github.com/Mini-project-iiests/reference-editor/blob/master_sayak_ref/index.html" target="_blank">
                  <img className="w-6 ml-2" src="https://img-premium.flaticon.com/png/512/25/25284.png?token=exp=1622492208~hmac=e8461d41ebec0f168e6d948af617fc3f" alt=""/>
                </a>
              </div>
              <div className="text-lg font-semibold text-gray-600">
                Report Designer / Script Writer
              </div>
            </div>
          </Grid>
          <Grid item xs={6} className="pb-16">
            <div className="w-full flex flex-col items-center">
              <img
                className="w-84 rounded-full filter drop-shadow-2xl border-8 border-gray-300"
                src="https://media-exp1.licdn.com/dms/image/C5103AQEMIrKYdU_YmQ/profile-displayphoto-shrink_400_400/0/1576950398019?e=1628121600&v=beta&t=CBl3K2lGi6V5OdALET6jSGxv33d2XpTadUamyQxct30" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Malay Gain</span>
                <a href="https://www.linkedin.com/in/malay-gain-43466419a/" target="_blank">
                  <img className="w-6" src="https://static-exp1.licdn.com/sc/h/2if24wp7oqlodqdlgei1n1520" alt=""/>
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
                src="https://media-exp1.licdn.com/dms/image/C4D03AQEbf5xJHFn3oA/profile-displayphoto-shrink_400_400/0/1605703317475?e=1628121600&v=beta&t=IM4ca-W_MLvTpCn7r3GizSGMeWRrl3MBpKAGNO8OyAo" alt=""/>
              <div className="text-2xl font-bold my-8 flex items-center">
                <span className="mr-4 text-gray-800">Shivam Kumar</span>
                <a href="https://www.linkedin.com/in/shivam-kumar5502/" target="_blank">
                  <img className="w-6" src="https://static-exp1.licdn.com/sc/h/2if24wp7oqlodqdlgei1n1520" alt=""/>
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