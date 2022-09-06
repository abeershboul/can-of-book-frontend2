import React from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
      .get(`http://localhost:3000/getbook`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {

    /* TODO: render all the books in a Carousel */
    return (
      <>
      <h2>My Best Books </h2>
      <Carousel >
        {this.state.books.length ? (
           this.state.books.map((item) => {
                return(
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://play-lh.googleusercontent.com/DmpYQrVcldrDuz5uyATqGbNvTALsJ1Bg3fpXM0p-VsRNM19osEB9-_ByvdjSbTvZQg=w450-h300-rw"
                    alt={item.title}
                  />
                  <Carousel.Caption>
                    <h3><p>{item.title}</p></h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                  </Carousel.Caption>
                </Carousel.Item>
                )
              })
           
          
        ) : (
          <h3>No Books Found :(</h3>
        )}
         </Carousel>
      </>
    );
      }
}

export default BestBooks;