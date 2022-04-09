import { Component } from "react";
import RadioBrowser from "../radio-browser";
import Tag from "./Tag";

class TagsZone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var json = this.props.src;
    if (json == undefined) {
      return <div />;
    }
    var filter = this.props.filter;
    var caption = this.props.caption;
    const tagsArray = json
      .filter((data) => filter.includes(data.name[0]))
      .map((data) => <Tag tag={data.name}></Tag>);
    return (
      <div>
        <h1>{caption}</h1>
        {tagsArray}
      </div>
    );
  }
}

class TagsPage extends Component {
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
    json = json.filter((data) => data.stationcount > 10);
    return (
      <>
        <TagsZone src={json} filter="0123456789" caption="0-9"/>
        <TagsZone src={json} filter="a" caption="A"/>
        <TagsZone src={json} filter="b" caption="B"/>
        <TagsZone src={json} filter="c" caption="C"/>
        <TagsZone src={json} filter="d" caption="D"/>
        <TagsZone src={json} filter="e" caption="E"/>
        <TagsZone src={json} filter="f" caption="F"/>
        <TagsZone src={json} filter="g" caption="G"/>
        <TagsZone src={json} filter="h" caption="H"/>
        <TagsZone src={json} filter="i" caption="I"/>
        <TagsZone src={json} filter="j" caption="J"/>
        <TagsZone src={json} filter="k" caption="K"/>
        <TagsZone src={json} filter="l" caption="L"/>
        <TagsZone src={json} filter="m" caption="M"/>
        <TagsZone src={json} filter="n" caption="N"/>
        <TagsZone src={json} filter="o" caption="O"/>
        <TagsZone src={json} filter="p" caption="P"/>
        <TagsZone src={json} filter="q" caption="Q"/>
        <TagsZone src={json} filter="r" caption="R"/>
        <TagsZone src={json} filter="s" caption="S"/>
        <TagsZone src={json} filter="t" caption="T"/>
        <TagsZone src={json} filter="u" caption="U"/>
        <TagsZone src={json} filter="v" caption="V"/>
        <TagsZone src={json} filter="w" caption="W"/>
        <TagsZone src={json} filter="x" caption="X"/>
        <TagsZone src={json} filter="y" caption="Y"/>
        <TagsZone src={json} filter="z" caption="Z"/>
      </>
    );
  }
}

export default TagsPage;
