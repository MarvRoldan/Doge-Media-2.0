import React from "react";
import { Card, Icon } from "semantic-ui-react";
import stephane from "../img/ProfilePictures/dog3.png";

const CardExampleCardProps2 = () => (
  <div className="card2">
    <Card
      image={stephane}
      header="Mishu"
      meta="Human: Stephane / Breed: German Shepherd Malamute / Hobby:  YEG Fetch Champ"
      description="Mauris at justo sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus rhoncus neque sapien, egestas varius diam vulputate nec. Nulla eget odio aliquam, mollis lectus sit amet, bibendum nisl. Nunc feugiat magna ac orci ullamcorper, vestibulum euismod mauris ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras convallis ipsum eget dui consectetur, eget eleifend dolor molestie. Nunc sit amet posuere ex. Fusce eget pharetra purus. Suspendisse potenti. In eleifend ex id nulla semper congue. Sed tincidunt ullamcorper neque id lacinia. Nulla efficitur imperdiet consectetur. Morbi rutrum vel orci nec malesuada."
      extra={extra}
    />
  </div>
);

const extra = (
  <div>
    <Icon name="user" />
    1600 Followers <br />
    <Icon name="github" color="black" size="large" />
    svaillancourt <br />
  </div>
);

export default CardExampleCardProps2;
