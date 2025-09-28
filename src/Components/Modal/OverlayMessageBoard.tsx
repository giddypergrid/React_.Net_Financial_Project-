import React from 'react';
import './OverlayMessageBoard.css';

type State = {
  isOpen: boolean;
  message: string | null;
};

export default class OverlayMessageBoard extends React.Component{
  static instance: OverlayMessageBoard | null = null;

  static openOverlayMessageBoard(message: string) {
    if (OverlayMessageBoard.instance) {
      OverlayMessageBoard.instance.setState({ isOpen: true, message });
    }
  }

  static closeOverlayMessageBoard() {
    if (OverlayMessageBoard.instance) {
      OverlayMessageBoard.instance.setState({ isOpen: false, message: null });
    }
  }

  state: State = { isOpen: false, message: null };

  componentDidMount(): void {
    OverlayMessageBoard.instance = this;
  }

  componentWillUnmount(): void {
    if (OverlayMessageBoard.instance === this) {
      OverlayMessageBoard.instance = null;
    }
  }

  render() {
    if (!this.state.isOpen) return null;
    return (
      <div className="global-modal-overlay">
        <div className="global-modal-card">
          <button
            onClick={() => OverlayMessageBoard.closeOverlayMessageBoard()}
            aria-label="Close"
            className="global-modal-close"
          >
            ×
          </button>

          <div className="global-modal-content">
            <h2 className="global-modal-title">Notice</h2>
            <div className="global-modal-message">{this.state.message}</div>
          </div>
        </div>
      </div>
    );
  }
}


