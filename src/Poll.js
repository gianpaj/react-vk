import React from "react";
import PropTypes from "prop-types";

export default class Poll extends React.Component {
  static propTypes = {
    vk: PropTypes.shape.isRequired,
    elementId: PropTypes.string,
    options: PropTypes.shape({
      width: PropTypes.number,
      pageUrl: PropTypes.string
    }),
    pollId: PropTypes.string.isRequired
  };

  static defaultProps = {
    elementId: "vk_poll",
    options: {
      height: 24
    }
  };

  componentDidMount() {
    this.mount();
  }

  mount() {
    const { vk, elementId, options, pollId } = this.props;
    vk.Widgets.Poll(elementId, options, pollId);
  }

  render() {
    const { elementId } = this.props;
    return <div id={elementId} />;
  }
}
