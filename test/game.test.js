import test from 'node:test';import assert from 'node:assert/strict';import {newRoom,BOARD,transfer,purchase,rent,roll,build,hash,verify,worth} from '../game.js';
function setup(){const {room,id}=newRoom('123456','Yönetici','🎩');const p=room.players[0];room.players.push({id:'second',name:'İkinci',avatar:'🎲',cash:1500,pos:0,ready:true,bankrupt:false,stats:{income:0,expense:0,rent:0,trades:0}});room.status='playing';return {room,id,p}}
test('40 kare ve modlar',()=>{assert.equal(BOARD.length,40);assert.equal(newRoom('123456','A',null,'quick').room.rules.start,1800)});
test('para transferi atomik doğrulama',()=>{const {room,id}=setup();transfer(room,id,'second',200);assert.equal(room.players[0].cash,1300);assert.equal(room.players[1].cash,1700);assert.throws(()=>transfer(room,id,'second',999999));assert.equal(room.players[0].cash,1300)});
test('mülk satın alma ve kira',()=>{const {room,id,p}=setup();p.pos=1;purchase(room,id,1);assert.equal(p.cash,1440);assert.equal(rent(room,1),2);assert.throws(()=>purchase(room,'second',1))});
test('zar ve sıra',()=>{const {room,id}=setup();const result=roll(room,id);assert.ok(result.a>=1&&result.a<=6);assert.equal(room.turn,1)});
test('oturum token doğrulaması',()=>{const t='secret',h=hash(t);assert.equal(verify(t,h),true);assert.equal(verify('bad',h),false)});
test('servet hesabı',()=>{const {room,id,p}=setup();p.pos=1;purchase(room,id,1);assert.equal(worth(room,id),1500)});
