// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../node_modules/ts-builder/uws
//   ../node_modules/ts-builder/https
//   ../node_modules/ts-builder/http

import * as WebSocket from 'uws';
import * as HTTPS from 'https';
import { Server } from 'http';

export class ClusterWS {
    constructor(configuration: IUserOptions);
}

export class Broker {
    static Client(url: string, key: string, broadcaster: SocketServer | any, isReconnected?: boolean): void;
    static Server(port: number, serverConfigs: IObject): void;
}

export function masterProcess(options: IOptions): void;

export class EventEmitter {
    on(event: string, listener: TListener): void;
    emit(event: string, ...args: any[]): void;
    removeListener(event: string, listener: TListener): any;
    removeEvent(event: string): void;
    removeEvents(): void;
}

export function randomString(long?: boolean): string;
export function logError<T>(data: T): any;
export function logReady<T>(data: T): any;
export function logWarning<T>(data: T): any;
export type TWorkerFunction = () => void;
export type TSocketMessage = any;
export type TListener = (...args: any[]) => void;
export interface IProcessMessage {
    event: string;
    data: any;
}
export interface IObject {
    [propName: string]: any;
}
export interface IMachineScale {
    master: boolean;
    port: number;
    url?: string;
    securityKey?: string;
}
export interface IsecureProtocolOptions {
    port?: number;
    key: string;
    cert: string;
    ca?: any;
}
export interface IOptions {
    port: number;
    worker: TWorkerFunction;
    workers: number;
    brokerPort: number;
    pingInterval: number;
    restartWorkerOnFail: boolean;
    useBinary: boolean;
    secureProtocolOptions: IsecureProtocolOptions | false;
    machineScale?: IMachineScale;
}
export interface IUserOptions {
    port?: number;
    worker: TWorkerFunction;
    workers?: number;
    brokerPort?: number;
    pingInterval?: number;
    restartWorkerOnFail?: boolean;
    useBinary?: boolean;
    secureProtocolOptions?: IsecureProtocolOptions | false;
    machineScale?: IMachineScale;
}

export function workerProcess(options: IOptions): void;

export class SocketServer extends EventEmitter {
    middleware: IObject;
    setMiddleware(name: string, listener: TListener): void;
    publish(channel: string, data: any): void;
    setBroker(broker: WebSocket): void;
    broadcastMessage(x: string, message: TSocketMessage): void;
}

export class Socket {
    socket: WebSocket;
    missedPing: number;
    channels: string[];
    events: EventEmitter;
    constructor(socket: WebSocket, server: Worker);
    send(event: string, data: any, type?: string): void;
    on(event: string, listener: TListener): void;
    disconnect(code: number, reason: string): void;
}

export class Worker {
    options: IOptions;
    httpServer: Server | HTTPS.Server;
    httpsServer: Server | HTTPS.Server;
    socketServer: SocketServer;
    constructor(options: IOptions, serverConfigs: IObject);
}

