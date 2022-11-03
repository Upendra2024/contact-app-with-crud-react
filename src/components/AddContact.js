import React from "react";
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    gender: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.gender === " "
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", gender: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main" style={{paddingTop:"6vh"}}>
        <div className=" ui card centered "  style={{padding:"2vh 0 2vh 0",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div style={{position:"relative" }}>
            <h2 style={{position:"relative",left:"4vw"}}>Add Contact</h2>
            <form
              className="ui form "
              onSubmit={this.add}
              style={{ width: "250px", }}
            >
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="field">
                <label>Gender</label>
                <select
                  className="ui dropdown"
                  type="text"
                  name="gender"
                  placeholder="Gender"
                  value={this.state.gender}
                  onChange={(e) => this.setState({ gender: e.target.value })}
                >
                  {" "}
                  <option value="">-- Select gender -- </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button className="ui button blue">Add</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
