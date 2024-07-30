import {IndexBuffer} from "../index.js";

export class WebGPUIndexBuffer extends IndexBuffer {
	/**
	 * @type {GPUDevice}
	 */
	_device;

	/**
	 * @todo The format can only be set when using a {@link GPURenderPassEncoder}
	 * 
	 * @param {GPUDevice} device
	 * @param {ArrayBuffer} indices
	 * @param {GLenum} format
	 */
	constructor(device, indices, format) {
		super();

		this._device = device;
		this._format = format;
		this._buffer = this._device.createBuffer({
			label: WebGPUIndexBuffer.name,
			size: indices.byteLength,
			usage: GPUBufferUsage.INDEX,
		});

		this.bind();

		this._device.queue.writeBuffer(this._buffer, 0, indices);
	}

	/**
	 * @todo The index buffer can only be bound to a {@link GPURenderPassEncoder}
	 */
	bind() {}

	/**
	 * @todo The index buffer can only be bound to a {@link GPURenderPassEncoder}
	 */
	unbind() {}
}