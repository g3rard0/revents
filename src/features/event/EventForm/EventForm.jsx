import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    event: {
      title: '',
      date: '',
      city: '',
      venue: '',
      hostedBy: ''
    }
  };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    console.log('submitting form', this.state.event);
    this.props.createEvent(this.state.event);
  };

  onInputChange = (evt) => {
    const event = Object.assign({}, this.state.event);
    event[evt.target.name] = evt.target.value;
    //console.log('event', event, evt.target.name, evt.target.value);

    this.setState({
      event
    });
  };

  render() {
    const {handleCancel} = this.props;
    const { event } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" value={event.title} placeholder="First Name" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date" type="date" placeholder="Event Date" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" placeholder="City event is taking place" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" placeholder="Enter the Venue of the event" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hostedBy" placeholder="Enter the name of person hosting" onChange={this.onInputChange} />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={handleCancel}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;