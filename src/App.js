import React from 'react';
import './App.css';
class List extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <ol>
        {this.props.list.map((a) => {
          return <li key={a.hashId}>{a.content}</li>
        })}
      </ol>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      key: "f3922965be0a8586f7e0505181370b42",
      value: [],
      time: "",
      page: "",
      pagesize: "",
      sort: ""
    }
  }
  getjoke = () => {
    let url = "http://v.juhe.cn/joke/content/list.php?key=" + this.state.key + "&page=" + this.state.page + "&pagesize=" + this.state.pagesize + "&sort=" + this.state.sort + "&time=" + this.state.time;
    console.log(url);
    fetch(url).then(
      a => a.json()
    ).then(
      b => {
        console.log(b.result.data);
        let c = b.result.data;
        this.setState({
          value: c
        });
      }
    )
  };
  //输入框值变化-更新state
  inputValueTime = (e) => {
    console.log(e.target.value);
    this.setState({
      time: e.target.value
    });
  };
  inputValuePage = (e) => {
    console.log(e.target.value);
    this.setState({
      page: e.target.value
    });
  };
  inputValueSize = (e) => {
    console.log(e.target.value);
    this.setState({
      pagesize: e.target.value
    });
  };
  //单选选择项
  sortChange = (e) => {
    console.log(e.target.value);
    this.setState({
      sort: e.target.value
    })
  }
  render(){
    return (
    <div className="App">
      <div className="ip">
        <div>
          <span>time:</span> <input className="text" onChange={(event) => this.inputValueTime(event)}></input>
        </div>
        <div>
          <span>page:</span> <input className="text" onChange={(event) => this.inputValuePage(event)}></input>
        </div>
        <div>
          <span>size:</span> <input className="text" onChange={(event) => this.inputValueSize(event)}></input>
        </div>
        <div>
          <span>sort:</span> 
            <div className="select">
              <input name="sort" type="radio" defaultValue="asc" onChange={(event) => this.sortChange(event)} />asc
              <input name="sort" type="radio" defaultValue="desc" onChange={(event) => this.sortChange(event)}/>desc
            </div>
        </div>
        <button onClick={this.getjoke}>提交</button>
      </div>
      <div>
        <List list={this.state.value}/>
      </div>
    </div>)
  }
}

export default App;
