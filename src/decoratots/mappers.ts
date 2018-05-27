import {connect} from 'react-redux';

export const mapStateToProps = (mapStateToProps): any => {
    return connect(mapStateToProps, {});
};

export const mapDispatchToProps = (mapDispatchToProps): any => {
    const mapStateToProps = () => ({});
    return connect(mapStateToProps, mapDispatchToProps);
};
