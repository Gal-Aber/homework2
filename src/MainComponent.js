import React, { Component } from 'react';

// שאלה 1 - קומפוננטת כפתורי צבעים
class ColorButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white'
    };
  }

  handleColorChange = (color) => {
    this.setState({ backgroundColor: color });
  }

  render() {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown'];
    
    return (
      <div style={{ backgroundColor: this.state.backgroundColor, padding: '20px' }}>
        <h2>Color Buttons</h2>
        <div>
          {colors.map((color, index) => (
            <button 
              key={index} 
              onClick={() => this.handleColorChange(color)}
              style={{ 
                backgroundColor: color, 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                margin: '5px',
                cursor: 'pointer'
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

// שאלה 2 - קומפוננטת טופס
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      psychometricScore: '',
      lastNameWarning: false,
      firstNameWarning: false,
      psychometricScoreWarning: false,
      scoreMessage: ''
    };
  }

  handleInputFocus = (field) => {
    this.setState({ 
      [`${field}Warning`]: true 
    });
  }

  handleInputBlur = (field) => {
    this.setState({ 
      [`${field}Warning`]: false 
    });

    if (field === 'psychometricScore') {
      const score = parseInt(this.state.psychometricScore);
      if (isNaN(score) || score < 0 || score > 800) {
        this.setState({
          psychometricScoreWarning: true,
          scoreMessage: 'Please enter a valid psychometric score between 0 and 800.'
        });
      } else {
        this.setState({
          psychometricScoreWarning: false,
          scoreMessage: score > 555 
            ? 'Congratulations! You can be accepted for studies.'
            : 'Please try again next year.'
        });
      }
    }
  }

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2>Form</h2>
        <form>
          <div style={{ marginBottom: '10px' }}>
            {this.state.lastNameWarning && 
              <p style={{ color: 'red' }}>Please enter your last name.</p>}
            <label>
              Last Name:
              <input 
                type="text"
                value={this.state.lastName}
                onFocus={() => this.handleInputFocus('lastName')}
                onBlur={() => this.handleInputBlur('lastName')}
                onChange={(e) => this.handleInputChange(e, 'lastName')}
                style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '3px', width: '200px' }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            {this.state.firstNameWarning && 
              <p style={{ color: 'red' }}>Please enter your first name.</p>}
            <label>
              First Name:
              <input 
                type="text"
                value={this.state.firstName}
                onFocus={() => this.handleInputFocus('firstName')}
                onBlur={() => this.handleInputBlur('firstName')}
                onChange={(e) => this.handleInputChange(e, 'firstName')}
                style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '3px', width: '200px' }}
              />
            </label>
          </div>
          
          <div style={{ marginBottom: '10px' }}>
            {this.state.psychometricScoreWarning && 
              <p style={{ color: 'red' }}>{this.state.scoreMessage}</p>}
            <label>
              Psychometric Score:
              <input 
                type="number"
                value={this.state.psychometricScore}
                onFocus={() => this.handleInputFocus('psychometricScore')}
                onBlur={() => this.handleInputBlur('psychometricScore')}
                onChange={(e) => this.handleInputChange(e, 'psychometricScore')}
                style={{ padding: '5px', border: '1px solid #ccc', borderRadius: '3px', width: '200px' }}
              />
            </label>
            {!this.state.psychometricScoreWarning && this.state.scoreMessage && 
              <p style={{ color: this.state.scoreMessage.includes('Congratulations') ? 'green' : 'red' }}>
                {this.state.scoreMessage}
              </p>}
          </div>
          
          <button 
            type="submit"
            style={{ 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              padding: '10px 20px', 
              border: 'none', 
              borderRadius: '3px', 
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}


// שאלה 3 - קומפוננטת טבלה
class TableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableWidth: '100%'
    };
  }

  handleSingleClick = () => {
    this.setState({ tableWidth: '50%' });
  }

  handleDoubleClick = () => {
    this.setState({ tableWidth: '100%' });
  }

  render() {
    return (
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
        <h2>Table</h2>
        <table 
          style={{ 
            width: this.state.tableWidth, 
            border: '1px solid #ccc', 
            borderCollapse: 'collapse' 
          }}
          onClick={this.handleSingleClick}
          onDoubleClick={this.handleDoubleClick}
        >
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Column 1</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Column 2</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Row 1, Col 1</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Row 1, Col 2</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Row 1, Col 3</td>
            </tr>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Row 2, Col 1</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Row 2, Col 2</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Row 2, Col 3</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

// קומפוננטה ראשית המכילה את כל המרכיבים
class MainComponent extends Component {
  render() {
    return (
      <div>
        <ColorButtonComponent />
        <FormComponent />
        <TableComponent />
      </div>
    );
  }
}

export default MainComponent;