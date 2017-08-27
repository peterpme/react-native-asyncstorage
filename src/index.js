// @flow

import { PureComponent } from 'react'
import { AsyncStorage } from 'react-native'

const Storage = {}

Storage.GetItem = class GetItem extends PureComponent {
  props: {
    itemKey: string,
    lazy?: boolean,
    render?: Object
  }

  static defaultProps = {
    lazy: false
  }

  willUnmount = false
  state = {
    loading: false,
    error: undefined,
    value: undefined
  }

  componentWillMount () {
    if (this.props.lazy) {
      return
    }

    this._getValue()
  }

  componentWillUnmount () {
    this.willUnmount = true
  }

  _getValue = async () => {
    this.setState({ loading: true })
    if (this.willUnmount) return
    try {
      const response = await AsyncStorage.getItem(this.props.itemKey)
      this.setState({ loading: false, value: JSON.parse(response) })
    } catch (error) {
      this.setState({ loading: false, error, value: undefined })
      return undefined
    }
  }

  render () {
    if (!this.props.render) return null

    const { loading, value, error } = this.state

    return this.props.render({
      getValue: this._getValue,
      loading,
      value,
      error
    })
  }
}

Storage.SetItem = class SetItem extends PureComponent {
  props: {
    loading: boolean,
    lazy: boolean,
    value: string,
    error: string
  }

  static defaultProps = {
    lazy: false
  }

  willUnmount = false
  state = {
    loading: false,
    value: undefined,
    error: undefined
  }

  componentWillMount () {
    if (this.props.lazy) {
      return
    }

    this._setValue(this.props)
  }

  componentWillUnmount () {
    this.willUnmount = true
  }

  _setValue = async ({ itemKey, itemValue }) => {
    this.setState({ loading: true, error: undefined })
    if (this.willUnmount) return
    try {
      const value = JSON.stringify(itemValue)
      await AsyncStorage.setItem(itemKey, value)
      this.setState({ loading: false, value })
    } catch (error) {
      this.setState({ loading: false, error })
      return error
    }
  }

  render () {
    if (!this.props.render) return null
    const { loading, value, error } = this.state

    return this.props.render({
      setValue: this._setValue,
      loading,
      value,
      error
    })
  }
}

export default Storage
