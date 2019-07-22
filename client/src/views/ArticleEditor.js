import React, { Component } from "react";
import PropTypes from "prop-types";

//Import components
import TextInputField from "../components/common/TextInputField";
import TextAreaInputField from "../components/common/TextAreaInputField";

class ArticleEditor extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      subtitle: "",
      text: "",
      tags: "",
      errors: {}
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = event => {
    event.preventDefault();

    const newArticle = {
      title: this.state.title,
      subtitle: this.state.subtitle,
      text: this.state.text,
      tags: this.state.tags
    };

    const { actions } = this.props;
    actions.addArticle(newArticle, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <form onSubmit={this.onSubmit}>
              <TextInputField
                name="title"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.onChange}
                error={errors.title}
              />

              <TextInputField
                name="subtitle"
                type="text"
                placeholder="What's this article about?"
                value={this.state.subtitle}
                onChange={this.onChange}
                error={errors.subtitle}
              />

              <TextAreaInputField
                className="textarea"
                name="text"
                placeholder="Write your article (in markdown)"
                type="text"
                rows="10"
                value={this.state.text}
                onChange={this.onChange}
                error={errors.text}
              />

              <TextInputField
                name="tags"
                type="text"
                placeholder="Enter tags"
                value={this.state.tags}
                onChange={this.onChange}
              />

              <input
                type="submit"
                className="button is-pulled-right is-success is-large"
                value="Publish Article"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ArticleEditor.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.string,
  errors: PropTypes.object.isRequired
};

export default ArticleEditor;
