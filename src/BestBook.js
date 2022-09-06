import React from "react";
import axios from "axios";
import UpdateForm from "./UpdateForm";
import Button from "react-bootstrap/Button";
//import "./style.css"
import Modalform from "./modal";
// import Carousel from 'react-bootstrap/Carousel';
//import "./book.css";



import Carousel from "react-bootstrap/Carousel";
import axios from "axios";




class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {




      show: false,
      status: "",
      books: [],
      showFlag: false,
      currentBook: {},
    };
  }

  componentDidMount = () => {
    axios

      .get(`https://abeerrrrr.herokuapp.com/books`)

      .get(`http://localhost:3001/books`)

      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleOnChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  addBook = (event) => {
    event.preventDefault();

    const obj = {
      bookTitle: event.target.title.value,
      bookDescription: event.target.description.value,
      bookStatus:this.state.status,
    };
    console.log(obj);
    axios

      .post(`https://abeerrrrr.herokuapp.com/addBook`, obj)
      .post(`http://localhost:3001/addBook`, obj)

      .then((result) => {
        return this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    this.handleClose();
  };

  deleteBook = (id) => {
    axios

      .delete(`https://abeerrrrr.herokuapp.com/deleteBook/${id}`) //http://localhost:3010/deleteCat?id=${id}

      .delete(`http://localhost:3001/deleteBook/${id}`) //http://localhost:3010/deleteCat?id=${id}

      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openForm = (item) => {
    this.setState({
      showFlag: true,
      currentBook: item,
    });
  };

  handleOnChangeUpdate = (event) => {
    this.setState({
      status: event.target.value,
    });
  };

  handleCloseUpdate = () => {
    this.setState({
      showFlag: false,
    });
  };

  updateBook = (event) => {
    event.preventDefault();
    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status : event.target.status.value
    };
    const id = this.state.currentBook._id;
    axios

      .put(`https://abeerrrrr.herokuapp.com/updateBook/${id}`, obj)

      .put(`http://localhost:3001/updateBook/${id}`, obj)

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

        this.handleCloseUpdate();


        this.handleCloseUpda
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {




    return (
      <div>
        <div id="form">
          <>
            <Button
              style={{ color: "blue" }}
              variant="dark"
              size="lg"
              onClick={this.handleShow}
            >
              Add a Book!
            </Button>

            <Modalform
              show={this.state.show}
              handleClose={this.handleClose}
              addBook={this.addBook}
              handleOnChange={this.handleOnChange}
            />
          </>
        </div>
        <div>
          {this.state.books.length ? (
            <div>
              {this.state.books.map((item) => {
                return (
                  <div style={{ color: "blue" }}>
                    <h3 style={{ color: "#F65A83" }}>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>{item.status}</p>
                    <Button
                      style={{ color: "#B9005B" }}
                      variant="dark"
                      onClick={() => this.deleteBook(item._id)}
                    >
                      Delete This Book!
                    </Button>
                    <button onClick={() => this.openForm(item)}>update</button>
                    <UpdateForm
                      showFlag={this.state.showFlag}
                      handleCloseUpdate={this.handleCloseUpdate}
                      updateBook={this.updateBook}
                      currentBook={this.state.currentBook}
                      handleOnChangeUpdate={this.state.handleOnChangeUpdate}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <h3>No Books Found :(</h3>
          )}
        </div>
      </div>
    );
  }
}

export default BestBooks;



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


