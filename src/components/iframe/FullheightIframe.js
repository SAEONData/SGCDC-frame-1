import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class WrappedFrame extends React.Component {
    state = { contentHeight: 600 };
  
    handleResize = () => {
      const { body, documentElement } = this.container.contentWindow.document;
      const contentHeight = Math.max(
        body.clientHeight,
        body.offsetHeight,
        body.scrollHeight,
        documentElement.clientHeight,
        documentElement.offsetHeight,
        documentElement.scrollHeight
      );
      if (contentHeight !== this.state.contentHeight) this.setState({ contentHeight });
    };
    
    onLoad = () => {
      this.container.contentWindow.addEventListener('resize', this.handleResize);
      this.handleResize();
    }
    
    componentWillUnmount() {
      this.container.contentWindow.removeEventListener('resize', this.handleResize);
    }
    
    render() {
      const { contentHeight } = this.state;
      return (
        <> 
        <iframe
          frameBorder="0"
          onLoad={this.onLoad}
          ref={(container) => { this.container = container; }}
          scrolling="yes"
          src="http://www.sasdi.net/search.aspx?noframe=true"
          style={{ width: '100%', height: `${contentHeight}px` }}
          title="Some Content"
        />
        <button onClick={() => (window.location.reload())}>Close</button>
        </>
        
      );
    }
  }
