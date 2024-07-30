import {VertexBuffer} from "../index.js";

export class WebGPUVertexBuffer extends VertexBuffer {
	/**
	 * @type {GPUDevice}
	 */
	_device;

	/**
	 * @todo The format can only be set when using a {@link GPURenderPassEncoder}
	 * 
	 * @param {GPUDevice} device
	 * @param {ArrayBuffer} vertices
	 */
	constructor(device, vertices) {
		super();

		this._device = device;
		this._buffer = this._device.createBuffer({
			label: WebGPUVertexBuffer.name,
			size: vertices.byteLength,
			usage: GPUBufferUsage.VERTEX,
		});

		this.bind();

		this._device.queue.writeBuffer(this._buffer, 0, vertices);
	}

	/**
	 * @todo The vertex buffer can only be bound to a {@link GPURenderPassEncoder}
	 */
	bind() {}

	/**
	 * @todo The vertex buffer can only be bound to a {@link GPURenderPassEncoder}
	 */
	unbind() {}
}