import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    langList: languageGreetingsList,
    defaultImgUrl: languageGreetingsList[0].imageUrl,
    defaultText: languageGreetingsList[0].buttonText,
    defaultAltText: languageGreetingsList[0].imageAltText,
  }

  btnChange = id => {
    const {langList} = this.state
    const listItem = langList.filter(each => each.id === id)
    console.log(listItem)
    this.setState({
      defaultImgUrl: listItem[0].imageUrl,
      defaultText: listItem[0].buttonText,
      defaultAltText: listItem[0].imageAltText,
    })
  }

  render() {
    const {langList, defaultImgUrl, defaultText, defaultAltText} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="button-container">
            {langList.map(eachBtn => (
              <li key={eachBtn.id}>
                <button
                  className={
                    defaultText === eachBtn.buttonText
                      ? 'active-style'
                      : 'button-style'
                  }
                  type="button"
                  onClick={() => {
                    this.btnChange(eachBtn.id)
                  }}
                >
                  {eachBtn.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <div className="img-container">
            <img
              src={defaultImgUrl}
              alt={defaultAltText}
              className="img-style"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
