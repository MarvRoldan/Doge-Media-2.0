import * as React from "react";
import { RootState } from "./store";
import ItemExampleExtraContent from "./components/NewsFeedContent";
import MessageExampleList from "./components/ListMessage";
import { addPost, removePost } from "./store/newsfeed/action";
import { Post } from "./store/newsfeed/types";
import { connect } from "react-redux";
import { Form, TextArea, Input } from "semantic-ui-react";
import { Fragment } from "react";

export interface Page3Props {
  addPostToFeed: typeof addPost;
  removePostFromFeed: typeof removePost;
  posts: Post[];
}

export class Page3 extends React.Component<Page3Props> {

  // This generates the random id. 
  randomID = (): number => {
    let randomNumber: number = Math.floor(Math.random()*100);
    randomNumber += this.props.posts.length;
    return randomNumber;
  };

  // This will add a new "post" or in our case a new "bark".
  newBark(e: any) {
    e.preventDefault();

    // This grabs the text value from our form.
    const textField: HTMLInputElement | null = document.querySelector(
      '[posted="postedtext"]'
    );
    let textFieldValue: string = " ";

    if (textField !== null) textFieldValue = textField.value;

    addPost({
      id: 2,
      posted: textFieldValue,
    });
  }

  public render() {
    return (
      <Fragment>
        <MessageExampleList />
        <h1>Welcome to the Doge Park</h1>
        <br />
        <ItemExampleExtraContent />
        <Form onSubmit={this.newBark}>
          <TextArea placeholder="Tell us more" />
        </Form>
        <br />
        {this.props.posts.map((element) => (
          <div>{element.posted}</div>
        ))}
        <Input type="submit" value="Bark" />
      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    posts: state.feed.posts,
  };
};

export default connect(mapStateToProps, { addPost, removePost })(Page3);
