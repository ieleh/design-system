/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

export let Pill = props =>
  <span className={className(pf('pill'), props.className)}>
    {props.children}
    {props.unlinked ? <span className={pf('pill__label')} title={props.label || 'Full pill label verbiage mirrored here'}>Pill Label</span>
    : <a href="javascript:void(0);" className={pf('pill__label')} title={props.label || 'Full pill label verbiage mirrored here'}>{props.label || 'Pill Label'}</a>}
    <ButtonIcon className={pf('pill__remove')} flavor="icon" sprite="utility" symbol="close" assistiveText="Remove" />
  </span>;

export let PillContainer = props =>
  <div className={className(pf('pill_container'), props.className)}>
    {props.children}
  </div>;

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Default = props =>
  <Demo>
    <Pill />
  </Demo>;

let Icon = props =>
  <Demo>
    <Pill>
      <span className={pf('icon_container icon-standard-account pill__icon_container')}>
        <SvgIcon className={pf('icon')} sprite="standard" symbol="account" />
        <span className={pf('assistive-text')}>Account</span>
      </span>
    </Pill>
  </Demo>;

let Portrait = props =>
  <Demo>
    <Pill>
      <span className={pf('pill__icon avatar avatar--circle')}>
        <img src="/assets/images/avatar2.jpg" alt="" />
      </span>
    </Pill>
  </Demo>;

let Unlinked = props =>
  <Demo>
    <Pill unlinked />
  </Demo>;

let Truncated = props =>
  <Demo style={{ width: '220px' }}>
    <PillContainer>
      <Pill label="Pill label that is longer than the area that contains it" />
    </PillContainer>
  </Demo>;

let Container = props =>
  <Demo>
    <PillContainer>
      <Pill />
      <Pill />
      <Pill />
    </PillContainer>
  </Demo>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'pill',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'pill-with-icon',
    label: 'With icon',
    element: <Icon />
  },
  {
    id: 'pill-with-portrait',
    label: 'With portrait',
    element: <Portrait />
  },
  {
    id: 'pill-unlinked',
    label: 'Unlinked',
    element: <Unlinked />
  },
  {
    id: 'pill-truncated',
    label: 'Truncated',
    element: <Truncated />
  },
  {
    id: 'pill-container',
    label: 'Pill with Container',
    element: <Container />
  }
];
