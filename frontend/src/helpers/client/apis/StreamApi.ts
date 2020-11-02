/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime'
import { ApiError, ApiErrorFromJSON, ApiErrorToJSON } from '../models'

export interface GetStreamRequest {
    torrent?: string
    file?: string
    token?: string
}

/**
 *
 */
export class StreamApi extends runtime.BaseAPI {
    /**
     */
    async getStreamRaw(requestParameters: GetStreamRequest): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: runtime.HTTPQuery = {}

        if (requestParameters.torrent !== undefined) {
            queryParameters['torrent'] = requestParameters.torrent
        }

        if (requestParameters.file !== undefined) {
            queryParameters['file'] = requestParameters.file
        }

        if (requestParameters.token !== undefined) {
            queryParameters['token'] = requestParameters.token
        }

        const headerParameters: runtime.HTTPHeaders = {}

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken
            const tokenString = typeof token === 'function' ? token('apiKey', []) : token

            if (tokenString) {
                headerParameters['Authorization'] = `Bearer ${tokenString}`
            }
        }
        const response = await this.request({
            path: `/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        })

        return new runtime.BlobApiResponse(response)
    }

    /**
     */
    async getStream(requestParameters: GetStreamRequest): Promise<Blob> {
        const response = await this.getStreamRaw(requestParameters)
        return await response.value()
    }
}
