import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      response:[],
    }
  }
  componentWillMount () {
    
  }
  //--------clock-----------
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      5000
    );
    //--------------
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

  }
  callApi = async () => {
    const response = await fetch('/get-data');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  //--------------------------
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    let changeData = this.state.response;
    let defaultData = this.state.response;
    for (let i = 0; i < changeData.length ;i ++) {
      let deltaPrice = this.createRandomDeltaPrice(changeData[i].price);
      let delPriceNum = parseFloat(deltaPrice);
      let defaulPrice = parseFloat(defaultData[i].price);
      let deltaVolume = this.createRandomDeltaVolume(changeData[i].volume);
      let delvolumeNum = parseInt(deltaVolume);
      let defaulVolume = parseInt(defaultData[i].volume);
      changeData[i].price = delPriceNum;
      changeData[i].volume = delvolumeNum;
      changeData[i].change = delvolumeNum*deltaPrice - defaulVolume*defaulPrice;
      changeData[i].perChange =  changeData[i].change/defaulVolume/defaulPrice *100;
      //console.log('new volume === ' +  delvolumeNum + 'defaul volume ====' + defaulVolume + 'change ==='+ changeData[i].change);
    }
    this.setState({
      response:changeData,
    })
  }

  createRandomDeltaPrice (price) {
    //let price = parseFloat(price1).toFixed(2);
    let max = price + price*5/100;
    let min = price - price*5/100;
    let random = Math.random() * (max - min) + min ;
    return parseFloat(random).toFixed(2);
  }
  createRandomDeltaVolume (volume) {
    let random = Math.random() * (30 - 10) + 10 ;
    let oldVol = parseInt (volume);
    let newVol = oldVol + random;
    //return newVol;
    return parseFloat(newVol).toFixed(0);
  }
  mapItemToList = (data) => {
    return(
      <div>
        {data.map(data => (
          <div className="row itemList"  key={data.code}>
            <p className="col-md-1 code">{data.code}</p>
            <p className="col-md-4 company">{data.company}</p>
            <p className="col-md-1 price">{data.price}</p>
            <p className="col-md-2 listRight value">{Math.floor(data.volume*data.price)}</p>
            <p id = {data.id} className="col-md-2 listRight">{parseFloat(data.change).toFixed(2)}</p>
            <p className="col-md-2 listRight">{parseFloat(data.perChange).toFixed(2)}%</p>
          </div>
        ))}
      </div>
    )
  }
 
  render() {
    return (
      <div className="App">
        <div className="container-fluid mainPage">
          <div className="container disPlay">
            <nav className="navbar navbar-expand-lg navbar-light navMain">
              <a className="navbar-brand logo" href="">S&#38;P&#47;ASX</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                </ul>
                <div className="my-2 my-lg-0">
                  <a className="my-2 my-sm-0 topItem" onClick={()=>alert('upgrading')}>TOP GAINERS</a>
                  <a className="my-2 my-sm-0 topItem" onClick={()=>alert('upgrading')}>TOP LOSERS</a>
                </div>
              </div>
            </nav>
          </div>
          <div className="container">
            <div className="row lableList">
              <p className="col-md-1">Code</p>
              <p className="col-md-4">Company</p>
              <p className="col-md-1">Price</p>
              <p className="col-md-2 listRight">Value</p>
              <p className="col-md-2 listRight">Change</p>
              <p className="col-md-2 listRight">%Change</p>
            </div>
            {this.mapItemToList(this.state.response)}   
          </div>
        </div>
      </div>
    );
  }
}

export default App;
