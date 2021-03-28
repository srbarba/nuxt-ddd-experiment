import { Plugin } from '@nuxt/types'

const container: Plugin = function (context, inject) {
  console.log(context)
  const unsubscribe = context.app.store?.subscribe(function (ct, ab) {
    console.log('from store subscribe', this, ct, ab)
  })

  const unsubscribeAction = context.app.store?.subscribeAction({
    before(ct, ab) {
      console.log('from store subscribeAction', this, ct, ab)
    },
    after(ct, ab) {
      console.log('from store subscribeAction', this, ct, ab)
    },
    error(ct, ab, error) {
      console.log('from store subscribeAction', this, ct, ab, error)
    },
  })

  // unsubscribe && unsubscribe()
  // unsubscribeAction && unsubscribeAction()

  inject('container', {
    test: 'abc',
  })
}

export default container
