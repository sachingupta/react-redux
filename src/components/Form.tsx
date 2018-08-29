import * as React from "react";
import { connect } from "react-redux";
import * as uuidv1 from "uuid";

import { IState, IArticle } from "../redux/store";

import { addArticle } from "../redux/actions/AddArticle";
const mapDispatchToProps = (dispatch: any) => {
  return {
    addArticle: (article: IArticle) => dispatch(addArticle(article))
  };
};

export interface IConnectedFormProps {
    addArticle: (article: IArticle)=> any;
}

export interface IConnectedFormState {
    title: string;
}

class ConnectedForm extends React.Component<IConnectedFormProps, IConnectedFormState> {
  constructor(props: IConnectedFormProps) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event: any) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event: any) {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;