/**
 * Google Apps Script Advanced Service: Analytics Declare file
 */
declare namespace Analytics {
    export namespace Management {
        export namespace Uploads {
            interface Resource {
                accountId: number;
                customDataSourceId: string;
                errors: [string];
                id: string;
                kind: string;
                status: string;
                uploadTime: Date;
            }
            interface List {
                kind: string,
                totalResults: number,
                startIndex: number,
                itemsPerPage: number,
                previousLink: string,
                nextLink: string,
                items: [Resource]
            }
            /**
             * Upload custom datasource.
             * https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/management/uploads/uploadData
             * @param accountId 
             * @param webPropertyId 
             * @param customDataSourceId 
             * @param file 
             */
            export function uploadData(
                accountId: string,
                webPropertyId: string,
                customDataSourceId: string,
                file: GoogleAppsScript.Base.Blob
            ): Resource;
            export function list(
                accountId: string,
                webPropertyId: string,
                customDataSourceId: string,
                optionalArgs?: any
            ): List;
        }
    }
}
