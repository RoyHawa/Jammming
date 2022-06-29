import React from "react";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={this.addTrack}>
        +
      </button>
    );
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    const { name, artist, album } = this.props.track;
    return (
        <div className="Track">
          <div className="Track-information">
            <h3>{name}</h3>
            <p>
              {" "}
              {artist} | {album}
            </p>
        {!this.props.isRemoval && (
          <audio src={this.props.track.previewUrl} controls />
          )}
          </div>
          {this.renderAction()}
          </div>
 
    );
  }
}
