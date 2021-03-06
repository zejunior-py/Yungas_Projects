import React, {Component} from "react";

class DefaultTable extends Component {

    render() {
        const {viewList} = this.props
        return (
            <div>
                <ul className="list-group list-group-flush">
                    {viewList.map(item =>
                        <div>
                            <div className="row">
                                <div className="col-md-12">
                                    <hr className="my-4"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <button className="btn btn-outline-success btn-sm mr-1"
                                            onClick={() => this.props.completed(item.id)}>
                                        <i className="fas fa-check fa-xs"/>
                                    </button>
                                </div>
                                <div className="col-md-6">

                                    <h3>
                                        <a href={item.id}
                                           className="list-group-item list-group-item-action disabled text-uppercase"
                                           tabIndex="-1"
                                           aria-disabled="true">{item.title}</a>
                                    </h3>
                                    <p className="text-lowercase text-monospace text-muted">{item.description}</p>
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-outline-primary btn-sm mr-1"
                                            onClick={() => this.props.updated(item.id)}>
                                        <i className="fas fa-pen fa-xs"/>
                                    </button>
                                    <button className="btn btn-outline-danger btn-sm"
                                            onClick={() => this.props.excluded(item.id)}>
                                        <i className="fas fa-trash fa-xs"/>
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}

export default DefaultTable;