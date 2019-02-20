import React, { Component } from 'react';
import { Icon, Button, Table } from 'semantic-ui-react';
import { formatJSONDate } from '../../tools/tools';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { dataSource } = this.props;
    const styles = {
      table: {
        width: '98%',
        margin: '0 auto',
        textAlign: 'center',
        boxShadow: '0 1px 20px -8px rgba(0,0,0,.5)'
      },
      link: {
        color: '#fff'
      },
      noDemo: {
        cursor: 'not-allowed'
      }
    };
    return (
      <Table celled selectable style={styles.table} inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Icon name="briefcase" />
              Name
            </Table.HeaderCell>
            <Table.HeaderCell collapsing width={4}>
              <Icon name="info" />
              Introduction
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="clock" />
              Created Date
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="arrow circle up" />
              Updated Date
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="linkify" />
              Link
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="star" />
              Stargazers Count
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="fork" />
              Forks Count
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Icon name="cloud download" />
              Is Fork?
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Object.keys(dataSource).map(key => (
            <Table.Row key={key}>
              <Table.Cell style={{ textAlign: 'left' }}>
                {dataSource[key].name}
              </Table.Cell>
              <Table.Cell style={{ textAlign: 'left' }}>
                {dataSource[key].description}
              </Table.Cell>
              <Table.Cell>
                {formatJSONDate(dataSource[key].created_at)}
              </Table.Cell>
              <Table.Cell>
                {formatJSONDate(dataSource[key].updated_at)}
              </Table.Cell>
              <Table.Cell>
                <Button.Group
                  style={!dataSource[key].homepage ? styles.noDemo : null}
                >
                  <Button primary>
                    <a
                      href={dataSource[key].html_url}
                      style={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                  <Button.Or />
                  <Button positive disabled={!dataSource[key].homepage}>
                    <a
                      href={dataSource[key].homepage}
                      style={styles.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                  </Button>
                </Button.Group>
              </Table.Cell>
              <Table.Cell>{dataSource[key].stargazers_count}</Table.Cell>
              <Table.Cell>{dataSource[key].forks_count}</Table.Cell>
              <Table.Cell>{dataSource[key].fork ? 'Yes' : 'No'}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default Content;
