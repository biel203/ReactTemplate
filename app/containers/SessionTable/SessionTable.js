import React, { useState } from 'react';
import './style.scss';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
    Container,
    Row,
    Col,
    Button,
    InputGroup,
    FormControl,
    InputGroupAddon,
} from 'react-bootstrap'

import Table from '../../components/Table'

export default class SessionList extends React.PureComponent {// eslint-disable-line react/prefer-stateless-function
    state = {
        filterInput: ''
    }
    filter = (evt) => {
        evt.preventDefault();
        const { onChangeFilter } = this.props
        const { filterInput } = this.state

        console.log('[SessionList:filter]')
        console.log(filterInput)

        onChangeFilter(filterInput)
    }

    export = (evt) => {
        evt.preventDefault();
        console.log('[SessionList:export]')
        console.log(evt.target)
    }

    closeSession = (userName) => {
        console.log('[SessionList:closeSession]')
        console.log(userName)
    }

    render() {
        const { sessionList } = this.props;

        return (
            <Container className="table-content">
                <Row className="table-header">
                    <Col>
                        <Button
                            size="sm"
                            onClick={this.export}
                            variant="success">
                            Exportar
                        <FontAwesomeIcon className='icon-margin' icon={faChevronDown} />
                        </Button>
                    </Col>

                    <Col>
                        <form onSubmit={this.filter} className='search-form-input'>
                            <InputGroup>
                                <FormControl
                                    type="text"
                                    size="sm"
                                    value={this.state.filterInput}
                                    onChange={(evt) => this.setState({ filterInput: evt.target.value })}
                                    placeholder="Pesquisar &#xf002;"
                                    aria-label="Pesquisar"
                                    aria-describedby="btnGroupAddon"
                                />
                                <FormControl.Feedback>
                                    <span style={{ top: '5px' }}>
                                        <FontAwesomeIcon icon={faHome} />
                                    </span>
                                </FormControl.Feedback>
                                <InputGroup.Append>
                                    <InputGroup.Text id="btnGroupAddon">
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    </InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </form>
                    </Col>
                </Row>

                <Row>
                    <Table
                        dataList={sessionList.toJS()}
                        filter={this.filter}
                        onCloseSession={this.closeSession}
                    />
                </Row>
            </Container>
        )
    }
}

SessionList.propTypes = {
    loading: PropTypes.any,
    alerts: PropTypes.object,
    loadApp: PropTypes.func,
    clearError: PropTypes.func,
};
