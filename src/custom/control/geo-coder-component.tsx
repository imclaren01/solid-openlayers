import * as React from 'react';
import * as ol from 'openlayers';
import {GeoCoderControl} from './geo-coder-control';
import {Util} from '../../util';
import {Map} from '../../map';

export class GeoCoderComponent extends React.Component<any, any> {

  control: GeoCoderControl;

  options: any = {
    provider: undefined,
    key: undefined
  };

  events: any = {
    'place_changed': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    this.control = new GeoCoderControl(options);
    this.context.mapComp.controls.push(this.control)
    
    //regitster events
    let olEvents = Util.getEvents(this.events, this.props);
    for(let eventName in olEvents) {
      this.control.on(eventName, olEvents[eventName]);
    }

  }

}

GeoCoderComponent['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};
