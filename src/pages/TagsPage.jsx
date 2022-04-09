import { Component } from "react";
import RadioBrowser from "../radio-browser";
import Tag from "./Tag";




class TagsZone extends Component
{
  constructor(props)
  {
    super(props);
  }

  render() {
    console.log(this.props);
    var json = this.props.src;
    if (json == undefined)
    {
      return <div/>
      }
    var filter = this.props.filter;
    console.log(filter);
    const tagsArray = json.filter((data)=>data.name[0] == filter).map((data) => <Tag tag={data.name}></Tag>);
    return (
      <div>
        <h1>{filter.toUpperCase()}</h1>
        {tagsArray}
      </div>
    );
  }  

}



class TagsPage extends Component
{
    constructor(props) {
        super(props);
        this.state = { json: [] };
      }
    
      async componentDidMount() {
        let d = await RadioBrowser.GetTags();
        this.setState({ json: d });
      }
      
  
      render() {
        let { json } = this.state;
        json = json.filter((data) => data.stationcount > 5);
        return <>
          <TagsZone src={json} filter='a' />
          <TagsZone src={json} filter='b' />
          <TagsZone src={json} filter='c' />
          <TagsZone src={json} filter='d' />
          <TagsZone src={json} filter='e' />
          <TagsZone src={json} filter='f' />
          <TagsZone src={json} filter='g' />
          <TagsZone src={json} filter='h' />
          <TagsZone src={json} filter='i' />
          <TagsZone src={json} filter='j' />
          <TagsZone src={json} filter='k' />
          <TagsZone src={json} filter='l' />
          <TagsZone src={json} filter='m' />
          <TagsZone src={json} filter='n' />
          <TagsZone src={json} filter='o' />
          <TagsZone src={json} filter='p' />
          <TagsZone src={json} filter='q' />
          <TagsZone src={json} filter='r' />
          <TagsZone src={json} filter='s' />
          <TagsZone src={json} filter='t' />
          <TagsZone src={json} filter='u' />
          <TagsZone src={json} filter='v' />
          <TagsZone src={json} filter='w' />
          <TagsZone src={json} filter='x' />
          <TagsZone src={json} filter='y' />
          <TagsZone src={json} filter='z' />
          </>;


        // const tagsArray = json.filter((data)=>data.stationcount>5).map((data) => <Tag tag={data.name}></Tag>);
        // return (
        //   <div>
        //     {tagsArray}
        //   </div>
        //);
      }    
}

export default TagsPage;