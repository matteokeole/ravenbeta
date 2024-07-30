import {VertexBuffer} from "../index.js";

export class WebGLVertexBuffer extends VertexBuffer {
	/**
	 * @type {WebGL2RenderingContext}
	 */
	_context;

	/**
	 * @param {WebGL2RenderingContext} context
	 * @param {ArrayBuffer} vertices
	 */
	constructor(context, vertices) {
		super();

		this._context = context;
		this._buffer = this._context.createBuffer();

		this.bind();

		this._context.bufferData(this._context.ARRAY_BUFFER, vertices, this._context.STATIC_DRAW);
	}

	bind() {
		this._context.bindBuffer(this._context.ARRAY_BUFFER, this._buffer);
	}

	unbind() {
		this._context.bindBuffer(this._context.ARRAY_BUFFER, null);
	}
}