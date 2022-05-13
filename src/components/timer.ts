import {directive, AsyncDirective} from 'lit/async-directive.js'

class ElapsedTimerDirective extends AsyncDirective {
    render() {
      return
    }   
}

export const elapsedTimer = directive(ElapsedTimerDirective)