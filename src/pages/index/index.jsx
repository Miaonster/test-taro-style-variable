import React, { Component } from 'react'
import { View } from '@tarojs/components'
import './index.css'

export default class Index extends Component {

  componentWillMount () {
    document.documentElement.style.setProperty('--color', '#00ff00')
    console.log(document.documentElement.style.getPropertyValue('--color'))
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        Hello world!
      </View>
    )
  }
}
