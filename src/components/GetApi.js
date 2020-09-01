import React, { Component } from "react";
import axios from "axios";

class GetApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listing: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://rbdev.rentalbeast.com/api/listing.json?listing_ids=1326993"
      )
      .then((response) => {
        this.setState({ listing: response.data.data });
        console.log(response);
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { listing } = this.state;
    return (
      <div>
        <h1>Property listing</h1>
        {listing.map((list) => (
          <div key={list.apartment_id}>
            {list.address},{list.city},{list.state}-{list.zip}
          </div>
        ))}
      </div>
    );
  }
}

export default GetApi;
