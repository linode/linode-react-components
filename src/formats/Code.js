import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ClipboardButton from 'react-clipboard.js';


const DEFAULT_CLIPBOARD_ICON = 'fa-clipboard';

export default class Code extends Component {
  constructor() {
    super();

    this.state = { clipboardIcon: DEFAULT_CLIPBOARD_ICON };
  }

  onClickCopy = () => {
    if (this.state.clipboardIcon === DEFAULT_CLIPBOARD_ICON) {
      this.setState({ clipboardIcon: 'fa-check' }, () => {
        setTimeout(() => {
          this.setState({ clipboardIcon: DEFAULT_CLIPBOARD_ICON });
        }, 2500);
      });
    }
  };

  render() {
    const { example, noclipboard } = this.props;
    const { clipboardIcon } = this.state;

    let clipboardButton;
    if (!noclipboard) {
      clipboardButton = (
        <ClipboardButton
          className="Code-clipboardButton"
          data-clipboard-text={example}
          onClick={this.onClickCopy}
        >
          <i className={`fa ${clipboardIcon}`}></i>
        </ClipboardButton>
      );
    }

    return (
      <div className="Code">
        <code>{example}</code>
        {clipboardButton}
      </div>
    );
  }
}

Code.propTypes = {
  example: PropTypes.string,
  noclipboard: PropTypes.bool,
};

Code.defaultProps = {
  noclipboard: false,
};
