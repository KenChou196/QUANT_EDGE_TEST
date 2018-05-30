import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      defaultData : [
        {code:"CBA.AX",company:"NATION AUSTRALIA BANK LIMITED",price:80.21,volume:10245},
        {code:"SRX.AX",company:"SIRTEX MEDICAL LIMITED",price:70.58,volume:2134},
        {code:"ANZ.AX",company:"AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED",price:20.14,volume:964128},
        {code:"BHP.AX",company:"BHP BILLITON LIMITED",price:14.5,volume:2874},
        {code:"WBC.AX",company:"WESTPAC BANKING CORPORATION",price:87.2,volume:98752},
        {code:"NAB.AX",company:"NATIONA AUSTRALIA BANK LIMITED",price:11.5,volume:3654},
        {code:"MQG.AX",company:"MACQUARIE GROUP LIMITED",price:64.3,volume:2258},
        {code:"QBE.AX",company:"QBE INSURANCE GROUP LIMITED",price:21.8,volume:69834},
        {code:"RIO.AX",company:"RIO TINTO LIMITED",price:35.7,volume:27145},
        {code:"WES.AX",company:"WESFARMERS LIMITED",price:33.5,volume:99852},
        {code:"CSL.AX",company:"CSL LIMITED",price:87.4,volume:3148},
        {code:"FMG.AX",company:"FORTESCUE METALS GROUP LTD",price:65.9,volume:22874},
        {code:"TLS.AX",company:"TELSTRA CORPORATION LIMITED",price:71.5,volume:85314},
        {code:"CWN.AX",company:"CROWN RESORTS LIMITED",price:42.8,volume:9647}
      ],
      data : [
        {id:0,code:"CBA.AX",company:"NATION AUSTRALIA BANK LIMITED",price:80.21,volume:10245},
        {id:1,code:"SRX.AX",company:"SIRTEX MEDICAL LIMITED",price:70.58,volume:2134},
        {id:2,code:"ANZ.AX",company:"AUSTRALIA AND NEW ZEALAND BANKING GROUP LIMITED",price:20.14,volume:964128},
        {id:3,code:"BHP.AX",company:"BHP BILLITON LIMITED",price:14.5,volume:2874},
        {id:4,code:"WBC.AX",company:"WESTPAC BANKING CORPORATION",price:87.2,volume:98752},
        {id:5,code:"NAB.AX",company:"NATIONA AUSTRALIA BANK LIMITED",price:11.5,volume:3654},
        {id:6,code:"MQG.AX",company:"MACQUARIE GROUP LIMITED",price:64.3,volume:2258},
        {id:7,code:"QBE.AX",company:"QBE INSURANCE GROUP LIMITED",price:21.8,volume:69834},
        {id:8,code:"RIO.AX",company:"RIO TINTO LIMITED",price:35.7,volume:27145},
        {id:9,code:"WES.AX",company:"WESFARMERS LIMITED",price:33.5,volume:99852},
        {id:10,code:"CSL.AX",company:"CSL LIMITED",price:87.4,volume:3148},
        {id:11,code:"FMG.AX",company:"FORTESCUE METALS GROUP LTD",price:65.9,volume:22874},
        {id:12,code:"TLS.AX",company:"TELSTRA CORPORATION LIMITED",price:71.5,volume:85314},
        {id:13,code:"CWN.AX",company:"CROWN RESORTS LIMITED",price:42.8,volume:9647}
      ],
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
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    let changeData = this.state.data;
    let defaultData = this.state.defaultData;
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
      console.log('new volume === ' +  delvolumeNum + 'defaul volume ====' + defaulVolume + 'change ==='+ changeData[i].change);
    }
    this.setState({
      data:changeData,
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
            {this.mapItemToList(this.state.data)}   
          </div>
        </div>
      </div>
    );
  }
}

export default App;
