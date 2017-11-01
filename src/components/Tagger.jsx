import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Tagger = ({ pageFiles, workFiles }) => {
  const pageElems = [];
  const workElems = [];
  pageFiles.forEach(i => pageElems.push(<div style={{ display: 'block' }}>
    <img src={i.src} alt="test" width="400px" />
  </div>));
  workFiles.forEach(i => workElems.push(<div style={{ display: 'block' }}>
    <img src={i.src} alt="test" width="400px" />
  </div>));
  return (
    <div>
      Tagger
      <div style={{ width: '50%', float: 'left' }}>
        <h3>Pages</h3>
        {pageElems}
      </div>
      <div style={{ width: '50%', float: 'right' }}>
        <h3>Works</h3>
        {workElems}
      </div>
    </div>
  );
};

Tagger.propTypes = {
  pageFiles: PropTypes.array.isRequired,
  workFiles: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  pageFiles: state.edition.pageFiles,
  workFiles: state.edition.workFiles,
});

const FuncTagger = connect(mapStateToProps)(Tagger);

export default FuncTagger;
