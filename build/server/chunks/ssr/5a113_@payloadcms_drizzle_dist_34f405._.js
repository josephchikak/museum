module.exports = {

"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isPolymorphicRelationship.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isPolymorphicRelationship": (()=>isPolymorphicRelationship)
});
const isPolymorphicRelationship = (value)=>{
    return value && typeof value === 'object' && 'relationTo' in value && typeof value.relationTo === 'string' && 'value' in value;
}; //# sourceMappingURL=isPolymorphicRelationship.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/getNameFromDrizzleTable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getNameFromDrizzleTable": (()=>getNameFromDrizzleTable)
});
const getNameFromDrizzleTable = (table)=>{
    const symbol = Object.getOwnPropertySymbols(table).find((symb)=>symb.description.includes('Name'));
    return table[symbol];
}; //# sourceMappingURL=getNameFromDrizzleTable.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/addJoinTable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addJoinTable": (()=>addJoinTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$getNameFromDrizzleTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/getNameFromDrizzleTable.js [app-rsc] (ecmascript)");
;
const addJoinTable = ({ type, condition, joins, table })=>{
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$getNameFromDrizzleTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNameFromDrizzleTable"])(table);
    if (!joins.some((eachJoin)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$getNameFromDrizzleTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNameFromDrizzleTable"])(eachJoin.table) === name)) {
        joins.push({
            type,
            condition,
            table
        });
    }
}; //# sourceMappingURL=addJoinTable.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/getTableAlias.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getTableAlias": (()=>getTableAlias)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$alias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/alias.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$alias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sqlite-core/alias.js [app-rsc] (ecmascript)");
;
;
;
;
const getTableAlias = ({ adapter, tableName })=>{
    const newAliasTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])());
    let newAliasTable;
    if (adapter.name === 'postgres') {
        newAliasTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$alias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alias"])(adapter.tables[tableName], newAliasTableName);
    }
    if (adapter.name === 'sqlite') {
        newAliasTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sqlite$2d$core$2f$alias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alias"])(adapter.tables[tableName], newAliasTableName);
    }
    return {
        newAliasTable,
        newAliasTableName
    };
}; //# sourceMappingURL=getTableAlias.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/getTableColumnFromPath.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getTableColumnFromPath": (()=>getTableColumnFromPath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isPolymorphicRelationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isPolymorphicRelationship.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/addJoinTable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableAlias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/getTableAlias.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript) <export default as validate>");
;
;
;
;
;
;
;
;
const getTableColumnFromPath = ({ adapter, aliasTable, collectionPath, columnPrefix = '', constraintPath: incomingConstraintPath, constraints = [], fields, joins, locale: incomingLocale, pathSegments: incomingSegments, rootTableName: incomingRootTableName, selectFields, tableName, tableNameSuffix = '', value })=>{
    const fieldPath = incomingSegments[0];
    let locale = incomingLocale;
    const rootTableName = incomingRootTableName || tableName;
    let constraintPath = incomingConstraintPath || '';
    const field = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(fields).find((fieldToFind)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(fieldToFind) && fieldToFind.name === fieldPath);
    let newTableName = tableName;
    if (!field && fieldPath === 'id') {
        selectFields.id = adapter.tables[newTableName].id;
        return {
            columnName: 'id',
            constraints,
            field: {
                name: 'id',
                type: adapter.idType === 'uuid' ? 'text' : 'number'
            },
            table: adapter.tables[newTableName]
        };
    }
    if (field) {
        const pathSegments = [
            ...incomingSegments
        ];
        // If next segment is a locale,
        // we need to take it out and use it as the locale from this point on
        if ('localized' in field && field.localized && adapter.payload.config.localization) {
            const matchedLocale = adapter.payload.config.localization.localeCodes.find((locale)=>locale === pathSegments[1]);
            if (matchedLocale) {
                locale = matchedLocale;
                pathSegments.splice(1, 1);
            }
        }
        switch(field.type){
            case 'tabs':
                {
                    return getTableColumnFromPath({
                        adapter,
                        aliasTable,
                        collectionPath,
                        columnPrefix,
                        constraintPath,
                        constraints,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        joins,
                        locale,
                        pathSegments: pathSegments.slice(1),
                        rootTableName,
                        selectFields,
                        tableName: newTableName,
                        tableNameSuffix,
                        value
                    });
                }
            case 'tab':
                {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(field)) {
                        return getTableColumnFromPath({
                            adapter,
                            aliasTable,
                            collectionPath,
                            columnPrefix: `${columnPrefix}${field.name}_`,
                            constraintPath: `${constraintPath}${field.name}.`,
                            constraints,
                            fields: field.fields,
                            joins,
                            locale,
                            pathSegments: pathSegments.slice(1),
                            rootTableName,
                            selectFields,
                            tableName: newTableName,
                            tableNameSuffix: `${tableNameSuffix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}_`,
                            value
                        });
                    }
                    return getTableColumnFromPath({
                        adapter,
                        aliasTable,
                        collectionPath,
                        columnPrefix,
                        constraintPath,
                        constraints,
                        fields: field.fields,
                        joins,
                        locale,
                        pathSegments: pathSegments.slice(1),
                        rootTableName,
                        selectFields,
                        tableName: newTableName,
                        tableNameSuffix,
                        value
                    });
                }
            case 'group':
                {
                    if (locale && field.localized && adapter.payload.config.localization) {
                        newTableName = `${tableName}${adapter.localesSuffix}`;
                        let condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[tableName].id, adapter.tables[newTableName]._parentID);
                        if (locale !== 'all') {
                            condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(condition, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[newTableName]._locale, locale));
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                            condition,
                            joins,
                            table: adapter.tables[newTableName]
                        });
                    }
                    return getTableColumnFromPath({
                        adapter,
                        aliasTable,
                        collectionPath,
                        columnPrefix: `${columnPrefix}${field.name}_`,
                        constraintPath: `${constraintPath}${field.name}.`,
                        constraints,
                        fields: field.fields,
                        joins,
                        locale,
                        pathSegments: pathSegments.slice(1),
                        rootTableName,
                        selectFields,
                        tableName: newTableName,
                        tableNameSuffix: `${tableNameSuffix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}_`,
                        value
                    });
                }
            case 'select':
                {
                    if (field.hasMany) {
                        const newTableName = adapter.tableNameMap.get(`${tableName}_${tableNameSuffix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}`);
                        if (locale && field.localized && adapter.payload.config.localization) {
                            const conditions = [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[tableName].id, adapter.tables[newTableName].parent),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[newTableName]._locale, locale)
                            ];
                            if (locale !== 'all') {
                                conditions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[newTableName]._locale, locale));
                            }
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...conditions),
                                joins,
                                table: adapter.tables[newTableName]
                            });
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[tableName].id, adapter.tables[newTableName].parent),
                                joins,
                                table: adapter.tables[newTableName]
                            });
                        }
                        return {
                            columnName: 'value',
                            constraints,
                            field,
                            table: adapter.tables[newTableName]
                        };
                    }
                    break;
                }
            case 'text':
            case 'number':
                {
                    if (field.hasMany) {
                        let tableType = 'texts';
                        let columnName = 'text';
                        if (field.type === 'number') {
                            tableType = 'numbers';
                            columnName = 'number';
                        }
                        newTableName = `${rootTableName}_${tableType}`;
                        const joinConstraints = [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[rootTableName].id, adapter.tables[newTableName].parent),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["like"])(adapter.tables[newTableName].path, `${constraintPath}${field.name}`)
                        ];
                        if (locale && field.localized && adapter.payload.config.localization) {
                            const conditions = [
                                ...joinConstraints
                            ];
                            if (locale !== 'all') {
                                conditions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[newTableName]._locale, locale));
                            }
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...conditions),
                                joins,
                                table: adapter.tables[newTableName]
                            });
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...joinConstraints),
                                joins,
                                table: adapter.tables[newTableName]
                            });
                        }
                        return {
                            columnName,
                            constraints,
                            field,
                            table: adapter.tables[newTableName]
                        };
                    }
                    break;
                }
            case 'array':
                {
                    newTableName = adapter.tableNameMap.get(`${tableName}_${tableNameSuffix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}`);
                    const arrayParentTable = aliasTable || adapter.tables[tableName];
                    constraintPath = `${constraintPath}${field.name}.%.`;
                    if (locale && field.localized && adapter.payload.config.localization) {
                        const conditions = [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(arrayParentTable.id, adapter.tables[newTableName]._parentID)
                        ];
                        if (locale !== 'all') {
                            conditions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[newTableName]._locale, locale));
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                            condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...conditions),
                            joins,
                            table: adapter.tables[newTableName]
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                            condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(arrayParentTable.id, adapter.tables[newTableName]._parentID),
                            joins,
                            table: adapter.tables[newTableName]
                        });
                    }
                    return getTableColumnFromPath({
                        adapter,
                        collectionPath,
                        constraintPath,
                        constraints,
                        fields: field.fields,
                        joins,
                        locale,
                        pathSegments: pathSegments.slice(1),
                        rootTableName,
                        selectFields,
                        tableName: newTableName,
                        value
                    });
                }
            case 'blocks':
                {
                    let blockTableColumn;
                    let newTableName;
                    // handle blockType queries
                    if (pathSegments[1] === 'blockType') {
                        // find the block config using the value
                        const blockTypes = Array.isArray(value) ? value : [
                            value
                        ];
                        blockTypes.forEach((blockType)=>{
                            const block = field.blocks.find((block)=>block.slug === blockType);
                            newTableName = adapter.tableNameMap.get(`${tableName}_blocks_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(block.slug)}`);
                            const { newAliasTable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableAlias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableAlias"])({
                                adapter,
                                tableName: newTableName
                            });
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[tableName].id, newAliasTable._parentID),
                                table: newAliasTable
                            });
                            constraints.push({
                                columnName: '_path',
                                table: newAliasTable,
                                value: pathSegments[0]
                            });
                        });
                        return {
                            constraints,
                            field,
                            getNotNullColumnByValue: ()=>'id',
                            table: adapter.tables[tableName]
                        };
                    }
                    const hasBlockField = field.blocks.some((block)=>{
                        newTableName = adapter.tableNameMap.get(`${tableName}_blocks_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(block.slug)}`);
                        constraintPath = `${constraintPath}${field.name}.%.`;
                        let result;
                        const blockConstraints = [];
                        const blockSelectFields = {};
                        try {
                            result = getTableColumnFromPath({
                                adapter,
                                collectionPath,
                                constraintPath,
                                constraints: blockConstraints,
                                fields: block.fields,
                                joins,
                                locale,
                                pathSegments: pathSegments.slice(1),
                                rootTableName,
                                selectFields: blockSelectFields,
                                tableName: newTableName,
                                value
                            });
                        } catch (error) {
                        // this is fine, not every block will have the field
                        }
                        if (!result) {
                            return;
                        }
                        blockTableColumn = result;
                        constraints = constraints.concat(blockConstraints);
                        selectFields = {
                            ...selectFields,
                            ...blockSelectFields
                        };
                        if (field.localized && adapter.payload.config.localization) {
                            const conditions = [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])((aliasTable || adapter.tables[tableName]).id, adapter.tables[newTableName]._parentID)
                            ];
                            if (locale !== 'all') {
                                conditions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[newTableName]._locale, locale));
                            }
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...conditions),
                                table: adapter.tables[newTableName]
                            });
                        } else {
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])((aliasTable || adapter.tables[tableName]).id, adapter.tables[newTableName]._parentID),
                                table: adapter.tables[newTableName]
                            });
                        }
                        return true;
                    });
                    if (hasBlockField) {
                        return {
                            columnName: blockTableColumn.columnName,
                            constraints,
                            field: blockTableColumn.field,
                            pathSegments: pathSegments.slice(1),
                            rawColumn: blockTableColumn.rawColumn,
                            table: blockTableColumn.table
                        };
                    }
                    break;
                }
            case 'relationship':
            case 'upload':
                {
                    const newCollectionPath = pathSegments.slice(1).join('.');
                    if (Array.isArray(field.relationTo) || field.hasMany) {
                        let relationshipFields;
                        const relationTableName = `${rootTableName}${adapter.relationshipsSuffix}`;
                        const { newAliasTable: aliasRelationshipTable, newAliasTableName: aliasRelationshipTableName } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableAlias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableAlias"])({
                            adapter,
                            tableName: relationTableName
                        });
                        // Join in the relationships table
                        if (locale && field.localized && adapter.payload.config.localization) {
                            const conditions = [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])((aliasTable || adapter.tables[rootTableName]).id, aliasRelationshipTable.parent),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["like"])(aliasRelationshipTable.path, `${constraintPath}${field.name}`)
                            ];
                            if (locale !== 'all') {
                                conditions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(aliasRelationshipTable.locale, locale));
                            }
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...conditions),
                                table: aliasRelationshipTable
                            });
                        } else {
                            // Join in the relationships table
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])((aliasTable || adapter.tables[rootTableName]).id, aliasRelationshipTable.parent), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["like"])(aliasRelationshipTable.path, `${constraintPath}${field.name}`)),
                                table: aliasRelationshipTable
                            });
                        }
                        selectFields[`${relationTableName}.path`] = aliasRelationshipTable.path;
                        let newAliasTable;
                        if (typeof field.relationTo === 'string') {
                            const relationshipConfig = adapter.payload.collections[field.relationTo].config;
                            newTableName = adapter.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(relationshipConfig.slug));
                            // parent to relationship join table
                            relationshipFields = relationshipConfig.fields;
                            ({ newAliasTable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableAlias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableAlias"])({
                                adapter,
                                tableName: newTableName
                            }));
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(newAliasTable.id, aliasRelationshipTable[`${field.relationTo}ID`]),
                                table: newAliasTable
                            });
                            if (newCollectionPath === '' || newCollectionPath === 'id') {
                                return {
                                    columnName: `${field.relationTo}ID`,
                                    constraints,
                                    field,
                                    table: aliasRelationshipTable
                                };
                            }
                        } else if (newCollectionPath === 'value') {
                            const hasCustomCollectionWithCustomID = field.relationTo.some((relationTo)=>!!adapter.payload.collections[relationTo].customIDType);
                            const columns = field.relationTo.map((relationTo)=>{
                                let idType = adapter.idType === 'uuid' ? 'uuid' : 'number';
                                const { customIDType } = adapter.payload.collections[relationTo];
                                if (customIDType) {
                                    idType = customIDType;
                                }
                                const idTypeTextOrUuid = idType === 'text' || idType === 'uuid';
                                // Do not add the column to OR if we know that it can't match by the type
                                // We can't do the same with idType: 'number' because `value` can be from the REST search query params
                                if (typeof value === 'number' && idTypeTextOrUuid) {
                                    return null;
                                }
                                if (Array.isArray(value) && value.every((val)=>typeof val === 'number') && idTypeTextOrUuid) {
                                    return null;
                                }
                                // Do not add the UUID type column if incoming query value doesn't match UUID. If there aren't any collections with
                                // a custom ID type, we skip this check
                                // We need this because Postgres throws an error if querying by UUID column with a value that isn't a valid UUID.
                                if (value && !Array.isArray(value) && idType === 'uuid' && hasCustomCollectionWithCustomID) {
                                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(value)) {
                                        return null;
                                    }
                                }
                                if (Array.isArray(value) && idType === 'uuid' && hasCustomCollectionWithCustomID && !value.some((val)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(val))) {
                                    return null;
                                }
                                const relationTableName = adapter.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(adapter.payload.collections[relationTo].config.slug));
                                return {
                                    idType,
                                    rawColumn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`"${aliasRelationshipTableName}"."${relationTableName}_id"`)
                                };
                            }).filter(Boolean);
                            return {
                                columns,
                                constraints,
                                field,
                                table: aliasRelationshipTable
                            };
                        } else if (newCollectionPath === 'relationTo') {
                            const relationTo = Array.isArray(field.relationTo) ? field.relationTo : [
                                field.relationTo
                            ];
                            return {
                                constraints,
                                field,
                                getNotNullColumnByValue: (val)=>{
                                    const matchedRelation = relationTo.find((relation)=>relation === val);
                                    if (matchedRelation) {
                                        return `${matchedRelation}ID`;
                                    }
                                    return undefined;
                                },
                                table: aliasRelationshipTable
                            };
                        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isPolymorphicRelationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPolymorphicRelationship"])(value)) {
                            const { relationTo } = value;
                            const relationTableName = adapter.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(adapter.payload.collections[relationTo].config.slug));
                            return {
                                constraints,
                                field,
                                rawColumn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`"${aliasRelationshipTableName}"."${relationTableName}_id"`),
                                table: aliasRelationshipTable
                            };
                        } else {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('Not supported');
                        }
                        return getTableColumnFromPath({
                            adapter,
                            aliasTable: newAliasTable,
                            collectionPath: newCollectionPath,
                            constraints,
                            fields: relationshipFields,
                            joins,
                            locale,
                            pathSegments: pathSegments.slice(1),
                            rootTableName: newTableName,
                            selectFields,
                            tableName: newTableName,
                            value
                        });
                    } else if (pathSegments.length > 1 && !(pathSegments.length === 2 && pathSegments[1] === 'id')) {
                        // simple relationships
                        const columnName = `${columnPrefix}${field.name}`;
                        const newTableName = adapter.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(adapter.payload.collections[field.relationTo].config.slug));
                        const { newAliasTable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableAlias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableAlias"])({
                            adapter,
                            tableName: newTableName
                        });
                        if (field.localized && adapter.payload.config.localization) {
                            const { newAliasTable: aliasLocaleTable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableAlias$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableAlias"])({
                                adapter,
                                tableName: `${rootTableName}${adapter.localesSuffix}`
                            });
                            const condtions = [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(aliasLocaleTable._parentID, adapter.tables[rootTableName].id)
                            ];
                            if (locale !== 'all') {
                                condtions.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(aliasLocaleTable._locale, locale));
                            }
                            const localesTable = adapter.tables[`${rootTableName}${adapter.localesSuffix}`];
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...condtions),
                                joins,
                                table: localesTable
                            });
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(localesTable[columnName], newAliasTable.id),
                                table: newAliasTable
                            });
                        } else {
                            joins.push({
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(newAliasTable.id, aliasTable ? aliasTable[columnName] : adapter.tables[tableName][columnName]),
                                table: newAliasTable
                            });
                        }
                        return getTableColumnFromPath({
                            adapter,
                            aliasTable: newAliasTable,
                            collectionPath: newCollectionPath,
                            constraintPath: '',
                            constraints,
                            fields: adapter.payload.collections[field.relationTo].config.fields,
                            joins,
                            locale,
                            pathSegments: pathSegments.slice(1),
                            selectFields,
                            tableName: newTableName,
                            value
                        });
                    }
                    break;
                }
            default:
                {
                    break;
                }
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            let newTable = adapter.tables[newTableName];
            if (field.localized && adapter.payload.config.localization) {
                // If localized, we go to localized table and set aliasTable to undefined
                // so it is not picked up below to be used as targetTable
                const parentTable = aliasTable || adapter.tables[tableName];
                newTableName = `${tableName}${adapter.localesSuffix}`;
                newTable = adapter.tables[newTableName];
                let condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(parentTable.id, newTable._parentID);
                if (locale !== 'all') {
                    condition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(condition, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(newTable._locale, locale));
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$addJoinTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addJoinTable"])({
                    condition,
                    joins,
                    table: newTable
                });
                aliasTable = undefined;
            }
            const targetTable = aliasTable || newTable;
            selectFields[`${newTableName}.${columnPrefix}${field.name}`] = targetTable[`${columnPrefix}${field.name}`];
            return {
                columnName: `${columnPrefix}${field.name}`,
                constraints,
                field,
                pathSegments,
                table: targetTable
            };
        }
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Cannot find field for path at ${fieldPath}`);
}; //# sourceMappingURL=getTableColumnFromPath.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildOrderBy.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildOrderBy": (()=>buildOrderBy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableColumnFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/getTableColumnFromPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/select.js [app-rsc] (ecmascript)");
;
;
const buildOrderBy = ({ adapter, fields, joins, locale, selectFields, sort, tableName })=>{
    const orderBy = [];
    if (!sort) {
        const createdAt = adapter.tables[tableName]?.createdAt;
        if (createdAt) {
            sort = '-createdAt';
        } else {
            sort = '-id';
        }
    }
    if (typeof sort === 'string') {
        sort = [
            sort
        ];
    }
    for (const sortItem of sort){
        let sortProperty;
        let sortDirection;
        if (sortItem[0] === '-') {
            sortProperty = sortItem.substring(1);
            sortDirection = 'desc';
        } else {
            sortProperty = sortItem;
            sortDirection = 'asc';
        }
        try {
            const { columnName: sortTableColumnName, table: sortTable } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableColumnFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableColumnFromPath"])({
                adapter,
                collectionPath: sortProperty,
                fields,
                joins,
                locale,
                pathSegments: sortProperty.replace(/__/g, '.').split('.'),
                selectFields,
                tableName,
                value: sortProperty
            });
            if (sortTable?.[sortTableColumnName]) {
                orderBy.push({
                    column: sortTable[sortTableColumnName],
                    order: sortDirection === 'asc' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["asc"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["desc"]
                });
                selectFields[sortTableColumnName] = sortTable[sortTableColumnName];
            }
        } catch (err) {
        // continue
        }
    }
    return orderBy;
}; //# sourceMappingURL=buildOrderBy.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildAndOrConditions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildAndOrConditions": (()=>buildAndOrConditions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$parseParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/parseParams.js [app-rsc] (ecmascript)");
;
function buildAndOrConditions({ adapter, fields, joins, locale, selectFields, tableName, where }) {
    const completedConditions = [];
    // Loop over all AND / OR operations and add them to the AND / OR query param
    // Operations should come through as an array
    for (const condition of where){
        // If the operation is properly formatted as an object
        if (typeof condition === 'object') {
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$parseParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseParams"])({
                adapter,
                fields,
                joins,
                locale,
                selectFields,
                tableName,
                where: condition
            });
            if (result && Object.keys(result).length > 0) {
                completedConditions.push(result);
            }
        }
    }
    return completedConditions;
} //# sourceMappingURL=buildAndOrConditions.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/getCollectionIdType.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getCollectionIdType": (()=>getCollectionIdType)
});
const typeMap = {
    number: 'number',
    serial: 'number',
    text: 'text',
    uuid: 'text'
};
const getCollectionIdType = ({ adapter, collection })=>{
    return collection.customIDType ?? typeMap[adapter.idType];
}; //# sourceMappingURL=getCollectionIdType.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/sanitizeQueryValue.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "sanitizeQueryValue": (()=>sanitizeQueryValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$getCollectionIdType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/getCollectionIdType.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isPolymorphicRelationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isPolymorphicRelationship.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createArrayFromCommaDelineated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/createArrayFromCommaDelineated.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript) <export default as validate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
;
;
;
const sanitizeQueryValue = ({ adapter, columns, field, isUUID, operator: operatorArg, relationOrPath, val })=>{
    let operator = operatorArg;
    let formattedValue = val;
    let formattedColumns;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        return {
            operator,
            value: formattedValue
        };
    }
    if ((field.type === 'relationship' || field.type === 'upload') && !relationOrPath.endsWith('relationTo') && Array.isArray(formattedValue)) {
        const allPossibleIDTypes = [];
        formattedValue.forEach((val)=>{
            if (adapter.idType !== 'uuid' && typeof val === 'string') {
                allPossibleIDTypes.push(val, parseInt(val));
            } else if (typeof val === 'string') {
                allPossibleIDTypes.push(val);
            } else {
                allPossibleIDTypes.push(val, String(val));
            }
        });
        formattedValue = allPossibleIDTypes;
    }
    // Cast incoming values as proper searchable types
    if (field.type === 'checkbox' && typeof val === 'string') {
        if (val.toLowerCase() === 'true') {
            formattedValue = true;
        }
        if (val.toLowerCase() === 'false') {
            formattedValue = false;
        }
    }
    if ([
        'all',
        'in',
        'not_in'
    ].includes(operator)) {
        if (typeof formattedValue === 'string') {
            formattedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createArrayFromCommaDelineated$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createArrayFromCommaDelineated"])(formattedValue);
            if (field.type === 'number') {
                formattedValue = formattedValue.map((arrayVal)=>parseFloat(arrayVal));
            }
        }
        if (!Array.isArray(formattedValue) || formattedValue.length === 0) {
            return null;
        }
    }
    if (field.type === 'number' && typeof formattedValue === 'string') {
        formattedValue = Number(val);
        if (Number.isNaN(formattedValue)) {
            formattedValue = null;
        }
    }
    if (isUUID && typeof formattedValue === 'string') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(val)) {
            formattedValue = null;
        }
    }
    if (field.type === 'date' && operator !== 'exists') {
        if (typeof val === 'string') {
            formattedValue = new Date(val).toISOString();
            if (Number.isNaN(Date.parse(formattedValue))) {
                return {
                    operator,
                    value: undefined
                };
            }
        } else if (typeof val === 'number') {
            formattedValue = new Date(val).toISOString();
        }
    }
    if (field.type === 'relationship' || field.type === 'upload') {
        if (val === 'null') {
            formattedValue = null;
        } else if (!(formattedValue === null || typeof formattedValue === 'boolean')) {
            // convert the value to the idType of the relationship
            let idType;
            if (typeof field.relationTo === 'string') {
                idType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$getCollectionIdType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionIdType"])({
                    adapter,
                    collection: adapter.payload.collections[field.relationTo]
                });
            } else {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isPolymorphicRelationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPolymorphicRelationship"])(val)) {
                    if (operator !== 'equals') {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Only 'equals' operator is supported for polymorphic relationship object notation. Given - ${operator}`);
                    }
                    idType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$getCollectionIdType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionIdType"])({
                        adapter,
                        collection: adapter.payload.collections[val.relationTo]
                    });
                    return {
                        operator,
                        value: idType === 'number' ? Number(val.value) : String(val.value)
                    };
                }
                formattedColumns = columns.map(({ idType, rawColumn })=>{
                    let formattedValue;
                    if (Array.isArray(val)) {
                        formattedValue = val.map((eachVal)=>{
                            let formattedValue;
                            if (idType === 'number') {
                                formattedValue = Number(eachVal);
                                if (Number.isNaN(formattedValue)) {
                                    return null;
                                }
                            } else {
                                if (idType === 'uuid' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__validate$3e$__["validate"])(eachVal)) {
                                    return null;
                                }
                                formattedValue = String(eachVal);
                            }
                            return formattedValue;
                        }).filter(Boolean);
                    } else if (idType === 'number') {
                        formattedValue = Number(val);
                        if (Number.isNaN(formattedValue)) {
                            return null;
                        }
                    } else {
                        formattedValue = String(val);
                    }
                    return {
                        rawColumn,
                        value: formattedValue
                    };
                }).filter(Boolean);
            }
            if (Array.isArray(formattedValue)) {
                formattedValue = formattedValue.map((value)=>{
                    if (idType === 'number') {
                        return Number(value);
                    }
                    if (idType === 'text') {
                        return String(value);
                    }
                    return value;
                });
            } else {
                if (idType === 'number') {
                    formattedValue = Number(val);
                }
                if (idType === 'text') {
                    formattedValue = String(val);
                }
            }
        }
    }
    if ('hasMany' in field && field.hasMany && operator === 'contains') {
        operator = 'equals';
    }
    if (operator === 'near' || operator === 'within' || operator === 'intersects') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Querying with '${operator}' is not supported with the postgres database adapter.`);
    }
    if (operator === 'contains') {
        formattedValue = `%${formattedValue}%`;
    }
    if (operator === 'exists') {
        formattedValue = val === 'true' || val === true;
        if (formattedValue) {
            operator = 'exists';
        } else {
            operator = 'isNull';
        }
    }
    return {
        columns: formattedColumns,
        operator,
        value: formattedValue
    };
}; //# sourceMappingURL=sanitizeQueryValue.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/parseParams.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "parseParams": (()=>parseParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildAndOrConditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildAndOrConditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableColumnFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/getTableColumnFromPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$sanitizeQueryValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/sanitizeQueryValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/types/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/QueryError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function parseParams({ adapter, fields, joins, locale, selectFields, tableName, where }) {
    let result;
    const constraints = [];
    if (typeof where === 'object' && Object.keys(where).length > 0) {
        // We need to determine if the whereKey is an AND, OR, or a schema path
        for (const relationOrPath of Object.keys(where)){
            if (relationOrPath) {
                const condition = where[relationOrPath];
                let conditionOperator;
                if (relationOrPath.toLowerCase() === 'and') {
                    conditionOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"];
                } else if (relationOrPath.toLowerCase() === 'or') {
                    conditionOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["or"];
                }
                if (Array.isArray(condition)) {
                    const builtConditions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildAndOrConditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildAndOrConditions"])({
                        adapter,
                        fields,
                        joins,
                        locale,
                        selectFields,
                        tableName,
                        where: condition
                    });
                    if (builtConditions.length > 0) {
                        result = conditionOperator(...builtConditions);
                    }
                } else {
                    // It's a path - and there can be multiple comparisons on a single path.
                    // For example - title like 'test' and title not equal to 'tester'
                    // So we need to loop on keys again here to handle each operator independently
                    const pathOperators = where[relationOrPath];
                    if (typeof pathOperators === 'object') {
                        for (let operator of Object.keys(pathOperators)){
                            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validOperators"].includes(operator)) {
                                const val = where[relationOrPath][operator];
                                const { columnName, columns, constraints: queryConstraints, field, getNotNullColumnByValue, pathSegments, rawColumn, table } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$getTableColumnFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTableColumnFromPath"])({
                                    adapter,
                                    collectionPath: relationOrPath,
                                    fields,
                                    joins,
                                    locale,
                                    pathSegments: relationOrPath.replace(/__/g, '.').split('.'),
                                    selectFields,
                                    tableName,
                                    value: val
                                });
                                queryConstraints.forEach(({ columnName: col, table: constraintTable, value })=>{
                                    if (typeof value === 'string' && value.indexOf('%') > -1) {
                                        constraints.push(adapter.operators.like(constraintTable[col], value));
                                    } else {
                                        constraints.push(adapter.operators.equals(constraintTable[col], value));
                                    }
                                });
                                if ([
                                    'json',
                                    'richText'
                                ].includes(field.type) && Array.isArray(pathSegments) && pathSegments.length > 1) {
                                    const segments = pathSegments.slice(1);
                                    segments.unshift(table[columnName].name);
                                    if (field.type === 'richText') {
                                        // use the table name from the nearest join to handle blocks, arrays, etc. or use the tableName arg
                                        const jsonTable = joins.length === 0 ? tableName : joins[joins.length - 1].table[Object.getOwnPropertySymbols(joins[joins.length - 1].table)[0]];
                                        const jsonQuery = adapter.createJSONQuery({
                                            operator,
                                            pathSegments: segments,
                                            table: jsonTable,
                                            treatAsArray: [
                                                'children'
                                            ],
                                            treatRootAsArray: true,
                                            value: val
                                        });
                                        constraints.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(jsonQuery));
                                        break;
                                    }
                                    const jsonQuery = adapter.convertPathToJSONTraversal(pathSegments);
                                    const operatorKeys = {
                                        contains: {
                                            operator: 'like',
                                            wildcard: '%'
                                        },
                                        equals: {
                                            operator: '=',
                                            wildcard: ''
                                        },
                                        exists: {
                                            operator: val === true ? 'is not null' : 'is null',
                                            wildcard: ''
                                        },
                                        in: {
                                            operator: 'in',
                                            wildcard: ''
                                        },
                                        like: {
                                            operator: 'like',
                                            wildcard: '%'
                                        },
                                        not_equals: {
                                            operator: '<>',
                                            wildcard: ''
                                        },
                                        not_in: {
                                            operator: 'not in',
                                            wildcard: ''
                                        }
                                    };
                                    let formattedValue = val;
                                    if (adapter.name === 'sqlite' && operator === 'equals' && !isNaN(val)) {
                                        formattedValue = val;
                                    } else if ([
                                        'in',
                                        'not_in'
                                    ].includes(operator) && Array.isArray(val)) {
                                        if (adapter.name === 'sqlite') {
                                            formattedValue = `(${val.map((v)=>`${v}`).join(',')})`;
                                        } else {
                                            formattedValue = `(${val.map((v)=>`'${v}'`).join(', ')})`;
                                        }
                                    } else {
                                        formattedValue = `'${operatorKeys[operator].wildcard}${val}${operatorKeys[operator].wildcard}'`;
                                    }
                                    if (operator === 'exists') {
                                        formattedValue = '';
                                    }
                                    constraints.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`${table[columnName].name}${jsonQuery} ${operatorKeys[operator].operator} ${formattedValue}`));
                                    break;
                                }
                                if (getNotNullColumnByValue) {
                                    const columnName = getNotNullColumnByValue(val);
                                    if (columnName) {
                                        constraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNotNull"])(table[columnName]));
                                    } else {
                                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryError"]([
                                            {
                                                path: relationOrPath
                                            }
                                        ]);
                                    }
                                    break;
                                }
                                if (operator === 'like' && (field.type === 'number' || table[columnName].columnType === 'PgUUID')) {
                                    operator = 'equals';
                                }
                                if (operator === 'like') {
                                    constraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...val.split(' ').map((word)=>adapter.operators.like(table[columnName], `%${word}%`))));
                                    break;
                                }
                                const sanitizedQueryValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$sanitizeQueryValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeQueryValue"])({
                                    adapter,
                                    columns,
                                    field,
                                    isUUID: table?.[columnName] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PgUUID"],
                                    operator,
                                    relationOrPath,
                                    val
                                });
                                if (sanitizedQueryValue === null) {
                                    break;
                                }
                                const { columns: queryColumns, operator: queryOperator, value: queryValue } = sanitizedQueryValue;
                                // Handle polymorphic relationships by value
                                if (queryColumns) {
                                    if (!queryColumns.length) {
                                        break;
                                    }
                                    let wrapOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["or"];
                                    if (queryValue === null && [
                                        'equals',
                                        'not_equals'
                                    ].includes(operator)) {
                                        if (operator === 'equals') {
                                            wrapOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"];
                                        }
                                        constraints.push(wrapOperator(...queryColumns.map(({ rawColumn })=>operator === 'equals' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNull"])(rawColumn) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNotNull"])(rawColumn))));
                                        break;
                                    }
                                    if ([
                                        'not_equals',
                                        'not_in'
                                    ].includes(operator)) {
                                        wrapOperator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"];
                                    }
                                    constraints.push(wrapOperator(...queryColumns.map(({ rawColumn, value })=>adapter.operators[queryOperator](rawColumn, value))));
                                    break;
                                }
                                if (queryOperator === 'not_equals' && queryValue !== null) {
                                    constraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["or"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNull"])(rawColumn || table[columnName]), /* eslint-disable @typescript-eslint/no-explicit-any */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ne"])(rawColumn || table[columnName], queryValue)));
                                    break;
                                }
                                if ((field.type === 'relationship' || field.type === 'upload') && Array.isArray(queryValue) && operator === 'not_in') {
                                    constraints.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notInArray"])(table[columnName], queryValue)} OR
                    ${table[columnName]}
                    IS
                    NULL)`);
                                    break;
                                }
                                if (operator === 'equals' && queryValue === null) {
                                    constraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNull"])(rawColumn || table[columnName]));
                                    break;
                                }
                                if (operator === 'not_equals' && queryValue === null) {
                                    constraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNotNull"])(rawColumn || table[columnName]));
                                    break;
                                }
                                constraints.push(adapter.operators[queryOperator](rawColumn || table[columnName], queryValue));
                            }
                        }
                    }
                }
            }
        }
    }
    if (constraints.length > 0) {
        if (result) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(result, ...constraints);
        } else {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...constraints);
        }
    }
    if (constraints.length === 1 && !result) {
        [result] = constraints;
    }
    return result;
} //# sourceMappingURL=parseParams.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildOrderBy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildOrderBy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$parseParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/parseParams.js [app-rsc] (ecmascript)");
;
;
const buildQuery = function buildQuery({ adapter, fields, joins = [], locale, sort, tableName, where: incomingWhere }) {
    const selectFields = {
        id: adapter.tables[tableName].id
    };
    const orderBy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildOrderBy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildOrderBy"])({
        adapter,
        fields,
        joins,
        locale,
        selectFields,
        sort,
        tableName
    });
    let where;
    if (incomingWhere && Object.keys(incomingWhere).length > 0) {
        where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$parseParams$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseParams"])({
            adapter,
            fields,
            joins,
            locale,
            selectFields,
            tableName,
            where: incomingWhere
        });
    }
    return {
        joins,
        orderBy,
        selectFields,
        where
    };
};
const __TURBOPACK__default__export__ = buildQuery;
 //# sourceMappingURL=buildQuery.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/count.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "count": (()=>count)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
;
;
const count = async function count({ collection, locale, req, where: whereArg }) {
    const collectionConfig = this.payload.collections[collection].config;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug));
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const { joins, where } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        adapter: this,
        fields: collectionConfig.fields,
        locale,
        tableName,
        where: whereArg
    });
    const countResult = await this.countDistinct({
        db,
        joins,
        tableName,
        where
    });
    return {
        totalDocs: countResult
    };
}; //# sourceMappingURL=count.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/chainMethods.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Call and returning methods that would normally be chained together but cannot be because of control logic
 * @param methods
 * @param query
 */ __turbopack_esm__({
    "chainMethods": (()=>chainMethods)
});
const chainMethods = ({ methods, query })=>{
    return methods.reduce((query, { args, method })=>{
        return query[method](...args);
    }, query);
};
;
 //# sourceMappingURL=chainMethods.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/chainMethods.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
;
;
;
;
;
const traverseFields = ({ _locales, adapter, currentArgs, currentTableName, depth, fields, joinQuery = {}, joins, locale, path, tablePath, topLevelArgs, topLevelTableName, versions })=>{
    fields.forEach((field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsVirtual"])(field)) {
            return;
        }
        // handle simple relationship
        if (depth > 0 && (field.type === 'upload' || field.type === 'relationship') && !field.hasMany && typeof field.relationTo === 'string') {
            if (field.localized) {
                _locales.with[`${path}${field.name}`] = true;
            } else {
                currentArgs.with[`${path}${field.name}`] = true;
            }
        }
        if (field.type === 'collapsible' || field.type === 'row') {
            traverseFields({
                _locales,
                adapter,
                currentArgs,
                currentTableName,
                depth,
                fields: field.fields,
                joinQuery,
                joins,
                path,
                tablePath,
                topLevelArgs,
                topLevelTableName
            });
            return;
        }
        if (field.type === 'tabs') {
            field.tabs.forEach((tab)=>{
                const tabPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? `${path}${tab.name}_` : path;
                const tabTablePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? `${tablePath}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(tab.name)}_` : tablePath;
                traverseFields({
                    _locales,
                    adapter,
                    currentArgs,
                    currentTableName,
                    depth,
                    fields: tab.fields,
                    joinQuery,
                    joins,
                    path: tabPath,
                    tablePath: tabTablePath,
                    topLevelArgs,
                    topLevelTableName,
                    versions
                });
            });
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            switch(field.type){
                case 'array':
                    {
                        const withArray = {
                            columns: {
                                _parentID: false
                            },
                            orderBy: ({ _order }, { asc })=>[
                                    asc(_order)
                                ],
                            with: {}
                        };
                        const arrayTableName = adapter.tableNameMap.get(`${currentTableName}_${tablePath}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}`);
                        const arrayTableNameWithLocales = `${arrayTableName}${adapter.localesSuffix}`;
                        if (adapter.tables[arrayTableNameWithLocales]) {
                            withArray.with._locales = {
                                columns: {
                                    id: false,
                                    _parentID: false
                                },
                                with: {}
                            };
                        }
                        currentArgs.with[`${path}${field.name}`] = withArray;
                        traverseFields({
                            _locales: withArray.with._locales,
                            adapter,
                            currentArgs: withArray,
                            currentTableName: arrayTableName,
                            depth,
                            fields: field.fields,
                            joinQuery,
                            path: '',
                            tablePath: '',
                            topLevelArgs,
                            topLevelTableName
                        });
                        break;
                    }
                case 'select':
                    {
                        if (field.hasMany) {
                            const withSelect = {
                                columns: {
                                    id: false,
                                    order: false,
                                    parent: false
                                },
                                orderBy: ({ order }, { asc })=>[
                                        asc(order)
                                    ]
                            };
                            currentArgs.with[`${path}${field.name}`] = withSelect;
                        }
                        break;
                    }
                case 'blocks':
                    field.blocks.forEach((block)=>{
                        const blockKey = `_blocks_${block.slug}`;
                        if (!topLevelArgs[blockKey]) {
                            const withBlock = {
                                columns: {
                                    _parentID: false
                                },
                                orderBy: ({ _order }, { asc })=>[
                                        asc(_order)
                                    ],
                                with: {}
                            };
                            const tableName = adapter.tableNameMap.get(`${topLevelTableName}_blocks_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(block.slug)}`);
                            if (adapter.tables[`${tableName}${adapter.localesSuffix}`]) {
                                withBlock.with._locales = {
                                    with: {}
                                };
                            }
                            topLevelArgs.with[blockKey] = withBlock;
                            traverseFields({
                                _locales: withBlock.with._locales,
                                adapter,
                                currentArgs: withBlock,
                                currentTableName: tableName,
                                depth,
                                fields: block.fields,
                                joinQuery,
                                path: '',
                                tablePath: '',
                                topLevelArgs,
                                topLevelTableName
                            });
                        }
                    });
                    break;
                case 'group':
                    {
                        traverseFields({
                            _locales,
                            adapter,
                            currentArgs,
                            currentTableName,
                            depth,
                            fields: field.fields,
                            joinQuery,
                            joins,
                            path: `${path}${field.name}_`,
                            tablePath: `${tablePath}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}_`,
                            topLevelArgs,
                            topLevelTableName,
                            versions
                        });
                        break;
                    }
                case 'join':
                    {
                        // when `joinsQuery` is false, do not join
                        if (joinQuery === false) {
                            break;
                        }
                        const { limit: limitArg = 10, sort, where } = joinQuery[`${path.replaceAll('_', '.')}${field.name}`] || {};
                        let limit = limitArg;
                        if (limit !== 0) {
                            // get an additional document and slice it later to determine if there is a next page
                            limit += 1;
                        }
                        const fields = adapter.payload.collections[field.collection].config.fields;
                        const joinCollectionTableName = adapter.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.collection));
                        const joins = [];
                        const buildQueryResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
                            adapter,
                            fields,
                            joins,
                            locale,
                            sort,
                            tableName: joinCollectionTableName,
                            where
                        });
                        let subQueryWhere = buildQueryResult.where;
                        const orderBy = buildQueryResult.orderBy;
                        let joinLocalesCollectionTableName;
                        const currentIDColumn = versions ? adapter.tables[currentTableName].parent : adapter.tables[currentTableName].id;
                        // Handle hasMany _rels table
                        if (field.hasMany) {
                            const joinRelsCollectionTableName = `${joinCollectionTableName}${adapter.relationshipsSuffix}`;
                            if (field.localized) {
                                joinLocalesCollectionTableName = joinRelsCollectionTableName;
                            }
                            let columnReferenceToCurrentID;
                            if (versions) {
                                columnReferenceToCurrentID = `${topLevelTableName.replace('_', '').replace(new RegExp(`${adapter.versionsSuffix}$`), '')}_id`;
                            } else {
                                columnReferenceToCurrentID = `${topLevelTableName}_id`;
                            }
                            joins.push({
                                type: 'innerJoin',
                                condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[joinRelsCollectionTableName].parent, adapter.tables[joinCollectionTableName].id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`"${joinRelsCollectionTableName}"."${columnReferenceToCurrentID}"`), currentIDColumn), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[joinRelsCollectionTableName].path, field.on)),
                                table: adapter.tables[joinRelsCollectionTableName]
                            });
                        } else {
                            // Handle localized without hasMany
                            const foreignColumn = field.on.replaceAll('.', '_');
                            if (field.localized) {
                                joinLocalesCollectionTableName = `${joinCollectionTableName}${adapter.localesSuffix}`;
                                joins.push({
                                    type: 'innerJoin',
                                    condition: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[joinLocalesCollectionTableName]._parentID, adapter.tables[joinCollectionTableName].id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[joinLocalesCollectionTableName][foreignColumn], currentIDColumn)),
                                    table: adapter.tables[joinLocalesCollectionTableName]
                                });
                            // Handle without localized and without hasMany, just a condition append to where. With localized the inner join handles eq.
                            } else {
                                const constraint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[joinCollectionTableName][foreignColumn], currentIDColumn);
                                if (subQueryWhere) {
                                    subQueryWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(subQueryWhere, constraint);
                                } else {
                                    subQueryWhere = constraint;
                                }
                            }
                        }
                        const chainedMethods = [];
                        joins.forEach(({ type, condition, table })=>{
                            chainedMethods.push({
                                args: [
                                    table,
                                    condition
                                ],
                                method: type ?? 'leftJoin'
                            });
                        });
                        if (limit !== 0) {
                            chainedMethods.push({
                                args: [
                                    limit
                                ],
                                method: 'limit'
                            });
                        }
                        const db = adapter.drizzle;
                        const subQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainMethods"])({
                            methods: chainedMethods,
                            query: db.select({
                                id: adapter.tables[joinCollectionTableName].id,
                                ...joinLocalesCollectionTableName && {
                                    locale: adapter.tables[joinLocalesCollectionTableName].locale || adapter.tables[joinLocalesCollectionTableName]._locale
                                }
                            }).from(adapter.tables[joinCollectionTableName]).where(subQueryWhere).orderBy(()=>orderBy.map(({ column, order })=>order(column)))
                        });
                        const columnName = `${path.replaceAll('.', '_')}${field.name}`;
                        const jsonObjectSelect = field.localized ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`'_parentID', "id", '_locale', "${adapter.tables[joinLocalesCollectionTableName].locale ? 'locale' : '_locale'}"`) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`'id', "id"`);
                        if (adapter.name === 'sqlite') {
                            currentArgs.extras[columnName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
              COALESCE((
                SELECT json_group_array(json_object(${jsonObjectSelect}))
                FROM (
                  ${subQuery}
                ) AS ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`${columnName}_sub`)}
              ), '[]')
            `.as(columnName);
                        } else {
                            currentArgs.extras[columnName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
              COALESCE((
                SELECT json_agg(json_build_object(${jsonObjectSelect}))
                FROM (
                  ${subQuery}
                ) AS ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(`${columnName}_sub`)}
              ), '[]'::json)
            `.as(columnName);
                        }
                        break;
                    }
                default:
                    {
                        break;
                    }
            }
        }
    });
    return topLevelArgs;
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/buildFindManyArgs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildFindManyArgs": (()=>buildFindManyArgs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/traverseFields.js [app-rsc] (ecmascript)");
;
const buildFindManyArgs = ({ adapter, depth, fields, joinQuery, joins = [], locale, tableName, versions })=>{
    const result = {
        extras: {},
        with: {}
    };
    const _locales = {
        columns: {
            id: false,
            _parentID: false
        },
        extras: {},
        with: {}
    };
    if (adapter.tables[`${tableName}_texts`]) {
        result.with._texts = {
            columns: {
                id: false,
                parent: false
            },
            orderBy: ({ order }, { asc: ASC })=>[
                    ASC(order)
                ]
        };
    }
    if (adapter.tables[`${tableName}_numbers`]) {
        result.with._numbers = {
            columns: {
                id: false,
                parent: false
            },
            orderBy: ({ order }, { asc: ASC })=>[
                    ASC(order)
                ]
        };
    }
    if (adapter.tables[`${tableName}${adapter.relationshipsSuffix}`]) {
        result.with._rels = {
            columns: {
                id: false,
                parent: false
            },
            orderBy: ({ order }, { asc: ASC })=>[
                    ASC(order)
                ]
        };
    }
    if (adapter.tables[`${tableName}${adapter.localesSuffix}`]) {
        result.with._locales = _locales;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        _locales,
        adapter,
        currentArgs: result,
        currentTableName: tableName,
        depth,
        fields,
        joinQuery,
        joins,
        locale,
        path: '',
        tablePath: '',
        topLevelArgs: result,
        topLevelTableName: tableName,
        versions
    });
    return result;
}; //# sourceMappingURL=buildFindManyArgs.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/createBlocksMap.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createBlocksMap": (()=>createBlocksMap)
});
const createBlocksMap = (data)=>{
    const blocksMap = {};
    Object.entries(data).forEach(([key, rows])=>{
        if (key.startsWith('_blocks_') && Array.isArray(rows)) {
            const blockType = key.replace('_blocks_', '');
            rows.forEach((row)=>{
                if ('_path' in row) {
                    if (!(row._path in blocksMap)) {
                        blocksMap[row._path] = [];
                    }
                    row.blockType = blockType;
                    blocksMap[row._path].push(row);
                    delete row._path;
                }
            });
            delete data[key];
        }
    });
    Object.entries(blocksMap).reduce((sortedBlocksMap, [path, blocks])=>{
        sortedBlocksMap[path] = blocks.sort((a, b)=>{
            if (typeof a._order === 'number' && typeof b._order === 'number') {
                return a._order - b._order;
            }
            return 0;
        });
        return sortedBlocksMap;
    }, {});
    return blocksMap;
}; //# sourceMappingURL=createBlocksMap.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/createRelationshipMap.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// Flatten rows to object with path keys
// for easier retrieval
__turbopack_esm__({
    "createPathMap": (()=>createPathMap)
});
const createPathMap = (rows)=>{
    let rowsByPath = {};
    if (Array.isArray(rows)) {
        rowsByPath = rows.reduce((res, row)=>{
            const formattedRow = {
                ...row
            };
            delete formattedRow.path;
            if (!res[row.path]) {
                res[row.path] = [];
            }
            res[row.path].push(row);
            return res;
        }, {});
    }
    return rowsByPath;
}; //# sourceMappingURL=createRelationshipMap.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/hasManyNumber.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformHasManyNumber": (()=>transformHasManyNumber)
});
const transformHasManyNumber = ({ field, locale, numberRows, ref, withinArrayOrBlockLocale })=>{
    let result;
    if (withinArrayOrBlockLocale) {
        result = numberRows.reduce((acc, { locale, number })=>{
            if (locale === withinArrayOrBlockLocale) {
                acc.push(number);
            }
            return acc;
        }, []);
    } else {
        result = numberRows.map(({ number })=>number);
    }
    if (locale) {
        ref[field.name][locale] = result;
    } else {
        ref[field.name] = result;
    }
}; //# sourceMappingURL=hasManyNumber.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/hasManyText.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformHasManyText": (()=>transformHasManyText)
});
const transformHasManyText = ({ field, locale, ref, textRows, withinArrayOrBlockLocale })=>{
    let result;
    if (withinArrayOrBlockLocale) {
        result = textRows.reduce((acc, { locale, text })=>{
            if (locale === withinArrayOrBlockLocale) {
                acc.push(text);
            }
            return acc;
        }, []);
    } else {
        result = textRows.map(({ text })=>text);
    }
    if (locale) {
        ref[field.name][locale] = result;
    } else {
        ref[field.name] = result;
    }
}; //# sourceMappingURL=hasManyText.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/relationship.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformRelationship": (()=>transformRelationship)
});
const transformRelationship = ({ field, locale, ref, relations, withinArrayOrBlockLocale })=>{
    let result;
    if (!('hasMany' in field) || field.hasMany === false) {
        let relation = relations[0];
        if (withinArrayOrBlockLocale) {
            relation = relations.find((rel)=>rel.locale === withinArrayOrBlockLocale);
        }
        if (relation) {
            // Handle hasOne Poly
            if (Array.isArray(field.relationTo)) {
                const matchedRelation = Object.entries(relation).find(([key, val])=>{
                    return val !== null && ![
                        'id',
                        'locale',
                        'order',
                        'parent',
                        'path'
                    ].includes(key);
                });
                if (matchedRelation) {
                    const relationTo = matchedRelation[0].replace('ID', '');
                    result = {
                        relationTo,
                        value: matchedRelation[1]
                    };
                }
            }
        }
    } else {
        const transformedRelations = [];
        relations.forEach((relation)=>{
            let matchedLocale = true;
            if (withinArrayOrBlockLocale) {
                matchedLocale = relation.locale === withinArrayOrBlockLocale;
            }
            // Handle hasMany
            if (!Array.isArray(field.relationTo)) {
                const relatedData = relation[`${field.relationTo}ID`];
                if (relatedData && matchedLocale) {
                    transformedRelations.push(relatedData);
                }
            } else {
                // Handle hasMany Poly
                const matchedRelation = Object.entries(relation).find(([key, val])=>val !== null && ![
                        'id',
                        'locale',
                        'order',
                        'parent',
                        'path'
                    ].includes(key) && matchedLocale);
                if (matchedRelation) {
                    const relationTo = matchedRelation[0].replace('ID', '');
                    transformedRelations.push({
                        relationTo,
                        value: matchedRelation[1]
                    });
                }
            }
        });
        result = transformedRelations;
    }
    if (locale) {
        ref[field.name][locale] = result;
    } else {
        ref[field.name] = result;
    }
}; //# sourceMappingURL=relationship.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$hasManyNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/hasManyNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$hasManyText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/hasManyText.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$relationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/relationship.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
;
;
const traverseFields = ({ adapter, blocks, config, dataRef, deletions, fieldPrefix, fields, joinQuery, numbers, path, relationships, table, texts, withinArrayOrBlockLocale })=>{
    const sanitizedPath = path ? `${path}.` : path;
    const formatted = fields.reduce((result, field)=>{
        if (field.type === 'tabs') {
            traverseFields({
                adapter,
                blocks,
                config,
                dataRef,
                deletions,
                fieldPrefix,
                fields: field.tabs.map((tab)=>({
                        ...tab,
                        type: 'tab'
                    })),
                joinQuery,
                numbers,
                path,
                relationships,
                table,
                texts,
                withinArrayOrBlockLocale
            });
        }
        if (field.type === 'collapsible' || field.type === 'row' || field.type === 'tab' && !('name' in field)) {
            traverseFields({
                adapter,
                blocks,
                config,
                dataRef,
                deletions,
                fieldPrefix,
                fields: field.fields,
                joinQuery,
                numbers,
                path,
                relationships,
                table,
                texts,
                withinArrayOrBlockLocale
            });
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsVirtual"])(field)) {
                return result;
            }
            const fieldName = `${fieldPrefix || ''}${field.name}`;
            let fieldData = table[fieldName];
            const localizedFieldData = {};
            const valuesToTransform = [];
            if (fieldPrefix) {
                deletions.push(()=>delete table[fieldName]);
            }
            if (field.type === 'array') {
                if (Array.isArray(fieldData)) {
                    if (field.localized) {
                        result[field.name] = fieldData.reduce((arrayResult, row)=>{
                            if (typeof row._locale === 'string') {
                                if (!arrayResult[row._locale]) {
                                    arrayResult[row._locale] = [];
                                }
                                const locale = row._locale;
                                const data = {};
                                delete row._locale;
                                if (row._uuid) {
                                    row.id = row._uuid;
                                    delete row._uuid;
                                }
                                const rowResult = traverseFields({
                                    adapter,
                                    blocks,
                                    config,
                                    dataRef: data,
                                    deletions,
                                    fieldPrefix: '',
                                    fields: field.fields,
                                    numbers,
                                    path: `${sanitizedPath}${field.name}.${row._order - 1}`,
                                    relationships,
                                    table: row,
                                    texts,
                                    withinArrayOrBlockLocale: locale
                                });
                                if ('_order' in rowResult) {
                                    delete rowResult._order;
                                }
                                arrayResult[locale].push(rowResult);
                            }
                            return arrayResult;
                        }, {});
                    } else {
                        result[field.name] = fieldData.reduce((acc, row, i)=>{
                            if (row._uuid) {
                                row.id = row._uuid;
                                delete row._uuid;
                            }
                            if ('_order' in row) {
                                delete row._order;
                            }
                            if (!withinArrayOrBlockLocale || withinArrayOrBlockLocale && withinArrayOrBlockLocale === row._locale) {
                                if (row._locale) {
                                    delete row._locale;
                                }
                                acc.push(traverseFields({
                                    adapter,
                                    blocks,
                                    config,
                                    dataRef: row,
                                    deletions,
                                    fieldPrefix: '',
                                    fields: field.fields,
                                    numbers,
                                    path: `${sanitizedPath}${field.name}.${i}`,
                                    relationships,
                                    table: row,
                                    texts,
                                    withinArrayOrBlockLocale
                                }));
                            }
                            return acc;
                        }, []);
                    }
                }
                return result;
            }
            if (field.type === 'blocks') {
                const blockFieldPath = `${sanitizedPath}${field.name}`;
                const blocksByPath = blocks[blockFieldPath];
                if (Array.isArray(blocksByPath)) {
                    if (field.localized) {
                        result[field.name] = {};
                        blocksByPath.forEach((row)=>{
                            if (row._uuid) {
                                row.id = row._uuid;
                                delete row._uuid;
                            }
                            if (typeof row._locale === 'string') {
                                if (!result[field.name][row._locale]) {
                                    result[field.name][row._locale] = [];
                                }
                                result[field.name][row._locale].push(row);
                                delete row._locale;
                            }
                        });
                        Object.entries(result[field.name]).forEach(([locale, localizedBlocks])=>{
                            result[field.name][locale] = localizedBlocks.map((row)=>{
                                const block = field.blocks.find(({ slug })=>slug === row.blockType);
                                if (block) {
                                    const blockResult = traverseFields({
                                        adapter,
                                        blocks,
                                        config,
                                        dataRef: row,
                                        deletions,
                                        fieldPrefix: '',
                                        fields: block.fields,
                                        numbers,
                                        path: `${blockFieldPath}.${row._order - 1}`,
                                        relationships,
                                        table: row,
                                        texts,
                                        withinArrayOrBlockLocale: locale
                                    });
                                    delete blockResult._order;
                                    return blockResult;
                                }
                                return {};
                            });
                        });
                    } else {
                        // Add locale-specific index to have a proper blockFieldPath for current locale
                        // because blocks can be in the same array for different locales!
                        if (withinArrayOrBlockLocale && config.localization) {
                            for (const locale of config.localization.localeCodes){
                                let localeIndex = 0;
                                for(let i = 0; i < blocksByPath.length; i++){
                                    const row = blocksByPath[i];
                                    if (row._locale === locale) {
                                        row._index = localeIndex;
                                        localeIndex++;
                                    }
                                }
                            }
                        }
                        result[field.name] = blocksByPath.reduce((acc, row, i)=>{
                            delete row._order;
                            if (row._uuid) {
                                row.id = row._uuid;
                                delete row._uuid;
                            }
                            const block = field.blocks.find(({ slug })=>slug === row.blockType);
                            if (block) {
                                if (!withinArrayOrBlockLocale || withinArrayOrBlockLocale && withinArrayOrBlockLocale === row._locale) {
                                    if (row._locale) {
                                        delete row._locale;
                                    }
                                    if (typeof row._index === 'number') {
                                        i = row._index;
                                        delete row._index;
                                    }
                                    acc.push(traverseFields({
                                        adapter,
                                        blocks,
                                        config,
                                        dataRef: row,
                                        deletions,
                                        fieldPrefix: '',
                                        fields: block.fields,
                                        numbers,
                                        path: `${blockFieldPath}.${i}`,
                                        relationships,
                                        table: row,
                                        texts,
                                        withinArrayOrBlockLocale
                                    }));
                                    return acc;
                                }
                            } else {
                                acc.push({});
                            }
                            return acc;
                        }, []);
                    }
                }
                return result;
            }
            if (field.type === 'relationship' || field.type === 'upload') {
                if (typeof field.relationTo === 'string' && !('hasMany' in field && field.hasMany)) {
                    if (field.localized && config.localization && config.localization.locales && Array.isArray(table?._locales)) {
                        table._locales.forEach((localeRow)=>{
                            result[field.name] = {
                                [localeRow._locale]: localeRow[fieldName]
                            };
                        });
                    } else {
                        valuesToTransform.push({
                            ref: result,
                            table
                        });
                    }
                } else {
                    const relationPathMatch = relationships[`${sanitizedPath}${field.name}`];
                    if (!relationPathMatch) {
                        if ('hasMany' in field && field.hasMany) {
                            if (field.localized && config.localization && config.localization.locales) {
                                result[field.name] = {
                                    [config.localization.defaultLocale]: []
                                };
                            } else {
                                result[field.name] = [];
                            }
                        }
                        return result;
                    }
                    if (field.localized) {
                        result[field.name] = {};
                        const relationsByLocale = {};
                        relationPathMatch.forEach((row)=>{
                            if (typeof row.locale === 'string') {
                                if (!relationsByLocale[row.locale]) {
                                    relationsByLocale[row.locale] = [];
                                }
                                relationsByLocale[row.locale].push(row);
                            }
                        });
                        Object.entries(relationsByLocale).forEach(([locale, relations])=>{
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$relationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformRelationship"])({
                                field,
                                locale,
                                ref: result,
                                relations
                            });
                        });
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$relationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformRelationship"])({
                            field,
                            ref: result,
                            relations: relationPathMatch,
                            withinArrayOrBlockLocale
                        });
                    }
                    return result;
                }
            }
            if (field.type === 'join') {
                const { limit = 10 } = joinQuery?.[`${fieldPrefix.replaceAll('_', '.')}${field.name}`] || {};
                // raw hasMany results from SQLite
                if (typeof fieldData === 'string') {
                    fieldData = JSON.parse(fieldData);
                }
                let fieldResult;
                if (Array.isArray(fieldData)) {
                    if (field.localized) {
                        fieldResult = fieldData.reduce((joinResult, row)=>{
                            if (typeof row._locale === 'string') {
                                if (!joinResult[row._locale]) {
                                    joinResult[row._locale] = {
                                        docs: [],
                                        hasNextPage: false
                                    };
                                }
                                joinResult[row._locale].docs.push(row._parentID);
                            }
                            return joinResult;
                        }, {});
                        Object.keys(fieldResult).forEach((locale)=>{
                            fieldResult[locale].hasNextPage = fieldResult[locale].docs.length > limit;
                            fieldResult[locale].docs = fieldResult[locale].docs.slice(0, limit);
                        });
                    } else {
                        const hasNextPage = limit !== 0 && fieldData.length > limit;
                        fieldResult = {
                            docs: (hasNextPage ? fieldData.slice(0, limit) : fieldData).map(({ id })=>({
                                    id
                                })),
                            hasNextPage
                        };
                    }
                }
                result[field.name] = fieldResult;
                return result;
            }
            if (field.type === 'text' && field?.hasMany) {
                const textPathMatch = texts[`${sanitizedPath}${field.name}`];
                if (!textPathMatch) {
                    return result;
                }
                if (field.localized) {
                    result[field.name] = {};
                    const textsByLocale = {};
                    textPathMatch.forEach((row)=>{
                        if (typeof row.locale === 'string') {
                            if (!textsByLocale[row.locale]) {
                                textsByLocale[row.locale] = [];
                            }
                            textsByLocale[row.locale].push(row);
                        }
                    });
                    Object.entries(textsByLocale).forEach(([locale, texts])=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$hasManyText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformHasManyText"])({
                            field,
                            locale,
                            ref: result,
                            textRows: texts
                        });
                    });
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$hasManyText$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformHasManyText"])({
                        field,
                        ref: result,
                        textRows: textPathMatch,
                        withinArrayOrBlockLocale
                    });
                }
                return result;
            }
            if (field.type === 'number' && field.hasMany) {
                const numberPathMatch = numbers[`${sanitizedPath}${field.name}`];
                if (!numberPathMatch) {
                    return result;
                }
                if (field.localized) {
                    result[field.name] = {};
                    const numbersByLocale = {};
                    numberPathMatch.forEach((row)=>{
                        if (typeof row.locale === 'string') {
                            if (!numbersByLocale[row.locale]) {
                                numbersByLocale[row.locale] = [];
                            }
                            numbersByLocale[row.locale].push(row);
                        }
                    });
                    Object.entries(numbersByLocale).forEach(([locale, numbers])=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$hasManyNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformHasManyNumber"])({
                            field,
                            locale,
                            numberRows: numbers,
                            ref: result
                        });
                    });
                } else {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$hasManyNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformHasManyNumber"])({
                        field,
                        numberRows: numberPathMatch,
                        ref: result,
                        withinArrayOrBlockLocale
                    });
                }
                return result;
            }
            if (field.type === 'select' && field.hasMany) {
                if (Array.isArray(fieldData)) {
                    if (field.localized) {
                        result[field.name] = fieldData.reduce((selectResult, row)=>{
                            if (typeof row.locale === 'string') {
                                if (!selectResult[row.locale]) {
                                    selectResult[row.locale] = [];
                                }
                                selectResult[row.locale].push(row.value);
                            }
                            return selectResult;
                        }, {});
                    } else {
                        let selectData = fieldData;
                        if (withinArrayOrBlockLocale) {
                            selectData = selectData.filter(({ locale })=>locale === withinArrayOrBlockLocale);
                        }
                        result[field.name] = selectData.map(({ value })=>value);
                    }
                }
                return result;
            }
            if (field.localized && Array.isArray(table._locales)) {
                if (!table._locales.length && adapter.payload.config.localization) {
                    adapter.payload.config.localization.localeCodes.forEach((_locale)=>table._locales.push({
                            _locale
                        }));
                }
                table._locales.forEach((localeRow)=>{
                    valuesToTransform.push({
                        ref: localizedFieldData,
                        table: {
                            ...table,
                            ...localeRow
                        }
                    });
                });
            } else {
                valuesToTransform.push({
                    ref: result,
                    table
                });
            }
            valuesToTransform.forEach(({ ref, table })=>{
                const fieldData = table[`${fieldPrefix || ''}${field.name}`];
                const locale = table?._locale;
                let val = fieldData;
                switch(field.type){
                    case 'tab':
                    case 'group':
                        {
                            const groupFieldPrefix = `${fieldPrefix || ''}${field.name}_`;
                            const groupData = {};
                            const locale = table._locale;
                            const refKey = field.localized && locale ? locale : field.name;
                            if (field.localized && locale) {
                                delete table._locale;
                            }
                            ref[refKey] = traverseFields({
                                adapter,
                                blocks,
                                config,
                                dataRef: groupData,
                                deletions,
                                fieldPrefix: groupFieldPrefix,
                                fields: field.fields,
                                numbers,
                                path: `${sanitizedPath}${field.name}`,
                                relationships,
                                table,
                                texts,
                                withinArrayOrBlockLocale: locale || withinArrayOrBlockLocale
                            });
                            if ('_order' in ref) {
                                delete ref._order;
                            }
                            return;
                        }
                    case 'text':
                        {
                            if (typeof fieldData === 'string') {
                                val = String(fieldData);
                            }
                            break;
                        }
                    case 'number':
                        {
                            if (typeof fieldData === 'string') {
                                val = Number.parseFloat(fieldData);
                            }
                            break;
                        }
                    case 'date':
                        {
                            if (typeof fieldData === 'string') {
                                val = new Date(fieldData).toISOString();
                            }
                            break;
                        }
                    case 'relationship':
                    case 'upload':
                        {
                            if (val && typeof field.relationTo === 'string' && adapter.payload.collections[field.relationTo].customIDType === 'number') {
                                val = Number(val);
                            }
                            break;
                        }
                    default:
                        {
                            break;
                        }
                }
                if (typeof locale === 'string') {
                    ref[locale] = val;
                } else {
                    result[field.name] = val;
                }
            });
            if (Object.keys(localizedFieldData).length > 0) {
                result[field.name] = localizedFieldData;
            }
            return result;
        }
        return result;
    }, dataRef);
    if (Array.isArray(table._locales)) {
        deletions.push(()=>delete table._locales);
    }
    return formatted;
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transform": (()=>transform)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createBlocksMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/createBlocksMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createRelationshipMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/createRelationshipMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/traverseFields.js [app-rsc] (ecmascript)");
;
;
;
const transform = ({ adapter, config, data, fields, joinQuery })=>{
    let relationships = {};
    let texts = {};
    let numbers = {};
    if ('_rels' in data) {
        relationships = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createRelationshipMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPathMap"])(data._rels);
        delete data._rels;
    }
    if ('_texts' in data) {
        texts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createRelationshipMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPathMap"])(data._texts);
        delete data._texts;
    }
    if ('_numbers' in data) {
        numbers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createRelationshipMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPathMap"])(data._numbers);
        delete data._numbers;
    }
    const blocks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$createBlocksMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createBlocksMap"])(data);
    const deletions = [];
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        adapter,
        blocks,
        config,
        dataRef: {
            id: data.id
        },
        deletions,
        fieldPrefix: '',
        fields,
        joinQuery,
        numbers,
        path: '',
        relationships,
        table: data,
        texts
    });
    deletions.forEach((deletion)=>deletion());
    return result;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isArrayOfRows.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isArrayOfRows": (()=>isArrayOfRows)
});
function isArrayOfRows(data) {
    return Array.isArray(data);
} //# sourceMappingURL=isArrayOfRows.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/array.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformArray": (()=>transformArray)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isArrayOfRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isArrayOfRows.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/traverseFields.js [app-rsc] (ecmascript)");
;
;
const transformArray = ({ adapter, arrayTableName, baseTableName, blocks, blocksToDelete, data, field, locale, numbers, path, relationships, relationshipsToDelete, selects, texts, withinArrayOrBlockLocale })=>{
    const newRows = [];
    const hasUUID = adapter.tables[arrayTableName]._uuid;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isArrayOfRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArrayOfRows"])(data)) {
        data.forEach((arrayRow, i)=>{
            const newRow = {
                arrays: {},
                locales: {},
                row: {
                    _order: i + 1
                }
            };
            // If we have declared a _uuid field on arrays,
            // that means the ID has to be unique,
            // and our ids within arrays are not unique.
            // So move the ID to a uuid field for storage
            // and allow the database to generate a serial id automatically
            if (hasUUID) {
                newRow.row._uuid = arrayRow.id;
                delete arrayRow.id;
            }
            if (locale) {
                newRow.locales[locale] = {
                    _locale: locale
                };
            }
            if (field.localized) {
                newRow.row._locale = locale;
            }
            if (withinArrayOrBlockLocale) {
                newRow.row._locale = withinArrayOrBlockLocale;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                adapter,
                arrays: newRow.arrays,
                baseTableName,
                blocks,
                blocksToDelete,
                columnPrefix: '',
                data: arrayRow,
                fieldPrefix: '',
                fields: field.fields,
                locales: newRow.locales,
                numbers,
                parentTableName: arrayTableName,
                path: `${path || ''}${field.name}.${i}.`,
                relationships,
                relationshipsToDelete,
                row: newRow.row,
                selects,
                texts,
                withinArrayOrBlockLocale
            });
            newRows.push(newRow);
        });
    }
    return newRows;
}; //# sourceMappingURL=array.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/blocks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformBlocks": (()=>transformBlocks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/traverseFields.js [app-rsc] (ecmascript)");
;
;
const transformBlocks = ({ adapter, baseTableName, blocks, blocksToDelete, data, field, locale, numbers, path, relationships, relationshipsToDelete, selects, texts, withinArrayOrBlockLocale })=>{
    data.forEach((blockRow, i)=>{
        if (typeof blockRow.blockType !== 'string') {
            return;
        }
        const matchedBlock = field.blocks.find(({ slug })=>slug === blockRow.blockType);
        if (!matchedBlock) {
            return;
        }
        const blockType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(blockRow.blockType);
        if (!blocks[blockType]) {
            blocks[blockType] = [];
        }
        const newRow = {
            arrays: {},
            locales: {},
            row: {
                _order: i + 1,
                _path: `${path}${field.name}`
            }
        };
        if (field.localized && locale) {
            newRow.row._locale = locale;
        }
        if (withinArrayOrBlockLocale) {
            newRow.row._locale = withinArrayOrBlockLocale;
        }
        const blockTableName = adapter.tableNameMap.get(`${baseTableName}_blocks_${blockType}`);
        const hasUUID = adapter.tables[blockTableName]._uuid;
        // If we have declared a _uuid field on arrays,
        // that means the ID has to be unique,
        // and our ids within arrays are not unique.
        // So move the ID to a uuid field for storage
        // and allow the database to generate a serial id automatically
        if (hasUUID) {
            newRow.row._uuid = blockRow.id;
            delete blockRow.id;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
            adapter,
            arrays: newRow.arrays,
            baseTableName,
            blocks,
            blocksToDelete,
            columnPrefix: '',
            data: blockRow,
            fieldPrefix: '',
            fields: matchedBlock.fields,
            locales: newRow.locales,
            numbers,
            parentTableName: blockTableName,
            path: `${path || ''}${field.name}.${i}.`,
            relationships,
            relationshipsToDelete,
            row: newRow.row,
            selects,
            texts,
            withinArrayOrBlockLocale
        });
        blocks[blockType].push(newRow);
    });
}; //# sourceMappingURL=blocks.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/numbers.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformNumbers": (()=>transformNumbers)
});
const transformNumbers = ({ baseRow, data, numbers })=>{
    data.forEach((val, i)=>{
        numbers.push({
            ...baseRow,
            number: val,
            order: i + 1
        });
    });
}; //# sourceMappingURL=numbers.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/relationships.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformRelationship": (()=>transformRelationship)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const transformRelationship = ({ baseRow, data, field, relationships })=>{
    const relations = Array.isArray(data) ? data : [
        data
    ];
    relations.forEach((relation, i)=>{
        if (relation) {
            const relationRow = {
                ...baseRow
            };
            if ('hasMany' in field && field.hasMany) {
                relationRow.order = i + 1;
            }
            if (Array.isArray(field.relationTo) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["valueIsValueWithRelation"])(relation)) {
                relationRow[`${relation.relationTo}ID`] = relation.value;
                relationships.push(relationRow);
            } else {
                relationRow[`${field.relationTo}ID`] = relation;
                if (relation) {
                    relationships.push(relationRow);
                }
            }
        }
    });
}; //# sourceMappingURL=relationships.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/selects.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformSelects": (()=>transformSelects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isArrayOfRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isArrayOfRows.js [app-rsc] (ecmascript)");
;
const transformSelects = ({ id, data, locale })=>{
    const newRows = [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isArrayOfRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArrayOfRows"])(data)) {
        data.forEach((value, i)=>{
            const newRow = {
                order: i + 1,
                parent: id,
                value
            };
            if (locale) {
                newRow.locale = locale;
            }
            newRows.push(newRow);
        });
    }
    return newRows;
}; //# sourceMappingURL=selects.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/texts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformTexts": (()=>transformTexts)
});
const transformTexts = ({ baseRow, data, texts })=>{
    data.forEach((val, i)=>{
        texts.push({
            ...baseRow,
            order: i + 1,
            text: val
        });
    });
}; //# sourceMappingURL=texts.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isArrayOfRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/isArrayOfRows.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$blocks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/blocks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$numbers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/numbers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$relationships$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/relationships.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$selects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/selects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/texts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const traverseFields = ({ adapter, arrays, baseTableName, blocks, blocksToDelete, columnPrefix, data, existingLocales, fieldPrefix, fields, forcedLocale, locales, numbers, parentTableName, path, relationships, relationshipsToDelete, row, selects, texts, withinArrayOrBlockLocale })=>{
    fields.forEach((field)=>{
        let columnName = '';
        let fieldName = '';
        let fieldData;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsVirtual"])(field)) {
                return;
            }
            columnName = `${columnPrefix || ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}`;
            fieldName = `${fieldPrefix || ''}${field.name}`;
            fieldData = data[field.name];
        }
        if (field.type === 'array') {
            const arrayTableName = adapter.tableNameMap.get(`${parentTableName}_${columnName}`);
            if (!arrays[arrayTableName]) {
                arrays[arrayTableName] = [];
            }
            if (field.localized) {
                if (typeof data[field.name] === 'object' && data[field.name] !== null) {
                    Object.entries(data[field.name]).forEach(([localeKey, localeData])=>{
                        if (Array.isArray(localeData)) {
                            const newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformArray"])({
                                adapter,
                                arrayTableName,
                                baseTableName,
                                blocks,
                                blocksToDelete,
                                data: localeData,
                                field,
                                locale: localeKey,
                                numbers,
                                path,
                                relationships,
                                relationshipsToDelete,
                                selects,
                                texts,
                                withinArrayOrBlockLocale: localeKey
                            });
                            arrays[arrayTableName] = arrays[arrayTableName].concat(newRows);
                        }
                    });
                }
            } else {
                const newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformArray"])({
                    adapter,
                    arrayTableName,
                    baseTableName,
                    blocks,
                    blocksToDelete,
                    data: data[field.name],
                    field,
                    numbers,
                    path,
                    relationships,
                    relationshipsToDelete,
                    selects,
                    texts,
                    withinArrayOrBlockLocale
                });
                arrays[arrayTableName] = arrays[arrayTableName].concat(newRows);
            }
            return;
        }
        if (field.type === 'blocks') {
            field.blocks.forEach(({ slug })=>{
                blocksToDelete.add((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(slug));
            });
            if (field.localized) {
                if (typeof data[field.name] === 'object' && data[field.name] !== null) {
                    Object.entries(data[field.name]).forEach(([localeKey, localeData])=>{
                        if (Array.isArray(localeData)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$blocks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformBlocks"])({
                                adapter,
                                baseTableName,
                                blocks,
                                blocksToDelete,
                                data: localeData,
                                field,
                                locale: localeKey,
                                numbers,
                                path,
                                relationships,
                                relationshipsToDelete,
                                selects,
                                texts,
                                withinArrayOrBlockLocale: localeKey
                            });
                        }
                    });
                }
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$isArrayOfRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArrayOfRows"])(fieldData)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$blocks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformBlocks"])({
                    adapter,
                    baseTableName,
                    blocks,
                    blocksToDelete,
                    data: fieldData,
                    field,
                    numbers,
                    path,
                    relationships,
                    relationshipsToDelete,
                    selects,
                    texts,
                    withinArrayOrBlockLocale
                });
            }
            return;
        }
        if (field.type === 'group') {
            if (typeof data[field.name] === 'object' && data[field.name] !== null) {
                if (field.localized) {
                    Object.entries(data[field.name]).forEach(([localeKey, localeData])=>{
                        // preserve array ID if there is
                        localeData._uuid = data.id || data._uuid;
                        traverseFields({
                            adapter,
                            arrays,
                            baseTableName,
                            blocks,
                            blocksToDelete,
                            columnPrefix: `${columnName}_`,
                            data: localeData,
                            existingLocales,
                            fieldPrefix: `${fieldName}_`,
                            fields: field.fields,
                            forcedLocale: localeKey,
                            locales,
                            numbers,
                            parentTableName,
                            path: `${path || ''}${field.name}.`,
                            relationships,
                            relationshipsToDelete,
                            row,
                            selects,
                            texts,
                            withinArrayOrBlockLocale: localeKey
                        });
                    });
                } else {
                    // preserve array ID if there is
                    const groupData = data[field.name];
                    groupData._uuid = data.id || data._uuid;
                    traverseFields({
                        adapter,
                        arrays,
                        baseTableName,
                        blocks,
                        blocksToDelete,
                        columnPrefix: `${columnName}_`,
                        data: groupData,
                        existingLocales,
                        fieldPrefix: `${fieldName}_`,
                        fields: field.fields,
                        locales,
                        numbers,
                        parentTableName,
                        path: `${path || ''}${field.name}.`,
                        relationships,
                        relationshipsToDelete,
                        row,
                        selects,
                        texts,
                        withinArrayOrBlockLocale
                    });
                }
            }
            return;
        }
        if (field.type === 'tabs') {
            field.tabs.forEach((tab)=>{
                if ('name' in tab) {
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsVirtual"])(tab)) {
                        return;
                    }
                    if (typeof data[tab.name] === 'object' && data[tab.name] !== null) {
                        if (tab.localized) {
                            Object.entries(data[tab.name]).forEach(([localeKey, localeData])=>{
                                // preserve array ID if there is
                                localeData._uuid = data.id || data._uuid;
                                traverseFields({
                                    adapter,
                                    arrays,
                                    baseTableName,
                                    blocks,
                                    blocksToDelete,
                                    columnPrefix: `${columnPrefix || ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(tab.name)}_`,
                                    data: localeData,
                                    existingLocales,
                                    fieldPrefix: `${fieldPrefix || ''}${tab.name}_`,
                                    fields: tab.fields,
                                    forcedLocale: localeKey,
                                    locales,
                                    numbers,
                                    parentTableName,
                                    path: `${path || ''}${tab.name}.`,
                                    relationships,
                                    relationshipsToDelete,
                                    row,
                                    selects,
                                    texts,
                                    withinArrayOrBlockLocale: localeKey
                                });
                            });
                        } else {
                            const tabData = data[tab.name];
                            // preserve array ID if there is
                            tabData._uuid = data.id || data._uuid;
                            traverseFields({
                                adapter,
                                arrays,
                                baseTableName,
                                blocks,
                                blocksToDelete,
                                columnPrefix: `${columnPrefix || ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(tab.name)}_`,
                                data: tabData,
                                existingLocales,
                                fieldPrefix: `${fieldPrefix || ''}${tab.name}_`,
                                fields: tab.fields,
                                locales,
                                numbers,
                                parentTableName,
                                path: `${path || ''}${tab.name}.`,
                                relationships,
                                relationshipsToDelete,
                                row,
                                selects,
                                texts,
                                withinArrayOrBlockLocale
                            });
                        }
                    }
                } else {
                    traverseFields({
                        adapter,
                        arrays,
                        baseTableName,
                        blocks,
                        blocksToDelete,
                        columnPrefix,
                        data,
                        existingLocales,
                        fieldPrefix,
                        fields: tab.fields,
                        locales,
                        numbers,
                        parentTableName,
                        path,
                        relationships,
                        relationshipsToDelete,
                        row,
                        selects,
                        texts,
                        withinArrayOrBlockLocale
                    });
                }
            });
        }
        if (field.type === 'row' || field.type === 'collapsible') {
            traverseFields({
                adapter,
                arrays,
                baseTableName,
                blocks,
                blocksToDelete,
                columnPrefix,
                data,
                existingLocales,
                fieldPrefix,
                fields: field.fields,
                forcedLocale,
                locales,
                numbers,
                parentTableName,
                path,
                relationships,
                relationshipsToDelete,
                row,
                selects,
                texts,
                withinArrayOrBlockLocale
            });
        }
        if (field.type === 'relationship' || field.type === 'upload') {
            const relationshipPath = `${path || ''}${field.name}`;
            if (field.localized && (Array.isArray(field.relationTo) || 'hasMany' in field && field.hasMany)) {
                if (typeof fieldData === 'object') {
                    Object.entries(fieldData).forEach(([localeKey, localeData])=>{
                        if (localeData === null) {
                            relationshipsToDelete.push({
                                locale: localeKey,
                                path: relationshipPath
                            });
                            return;
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$relationships$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformRelationship"])({
                            baseRow: {
                                locale: localeKey,
                                path: relationshipPath
                            },
                            data: localeData,
                            field,
                            relationships
                        });
                    });
                }
                return;
            } else if (Array.isArray(field.relationTo) || 'hasMany' in field && field.hasMany) {
                if (fieldData === null || Array.isArray(fieldData) && fieldData.length === 0) {
                    relationshipsToDelete.push({
                        path: relationshipPath
                    });
                    return;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$relationships$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformRelationship"])({
                    baseRow: {
                        locale: withinArrayOrBlockLocale,
                        path: relationshipPath
                    },
                    data: fieldData,
                    field,
                    relationships
                });
                return;
            } else {
                if (!field.localized && fieldData && typeof fieldData === 'object' && 'id' in fieldData && fieldData?.id) {
                    fieldData = fieldData.id;
                } else if (field.localized) {
                    if (typeof fieldData === 'object') {
                        Object.entries(fieldData).forEach(([localeKey, localeData])=>{
                            if (typeof localeData === 'object') {
                                if (localeData && 'id' in localeData && localeData?.id) {
                                    fieldData[localeKey] = localeData.id;
                                }
                            } else {
                                fieldData[localeKey] = localeData;
                            }
                        });
                    }
                }
            }
        }
        if (field.type === 'text' && field.hasMany) {
            const textPath = `${path || ''}${field.name}`;
            if (field.localized) {
                if (typeof fieldData === 'object') {
                    Object.entries(fieldData).forEach(([localeKey, localeData])=>{
                        if (Array.isArray(localeData)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformTexts"])({
                                baseRow: {
                                    locale: localeKey,
                                    path: textPath
                                },
                                data: localeData,
                                texts
                            });
                        }
                    });
                }
            } else if (Array.isArray(fieldData)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$texts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformTexts"])({
                    baseRow: {
                        locale: withinArrayOrBlockLocale,
                        path: textPath
                    },
                    data: fieldData,
                    texts
                });
            }
            return;
        }
        if (field.type === 'number' && field.hasMany) {
            const numberPath = `${path || ''}${field.name}`;
            if (field.localized) {
                if (typeof fieldData === 'object') {
                    Object.entries(fieldData).forEach(([localeKey, localeData])=>{
                        if (Array.isArray(localeData)) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$numbers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformNumbers"])({
                                baseRow: {
                                    locale: localeKey,
                                    path: numberPath
                                },
                                data: localeData,
                                numbers
                            });
                        }
                    });
                }
            } else if (Array.isArray(fieldData)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$numbers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformNumbers"])({
                    baseRow: {
                        locale: withinArrayOrBlockLocale,
                        path: numberPath
                    },
                    data: fieldData,
                    numbers
                });
            }
            return;
        }
        if (field.type === 'select' && field.hasMany) {
            const selectTableName = adapter.tableNameMap.get(`${parentTableName}_${columnName}`);
            if (!selects[selectTableName]) {
                selects[selectTableName] = [];
            }
            if (field.localized) {
                if (typeof data[field.name] === 'object' && data[field.name] !== null) {
                    Object.entries(data[field.name]).forEach(([localeKey, localeData])=>{
                        if (Array.isArray(localeData)) {
                            const newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$selects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformSelects"])({
                                id: data._uuid || data.id,
                                data: localeData,
                                locale: localeKey
                            });
                            selects[selectTableName] = selects[selectTableName].concat(newRows);
                        }
                    });
                }
            } else if (Array.isArray(data[field.name])) {
                const newRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$selects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformSelects"])({
                    id: data._uuid || data.id,
                    data: data[field.name],
                    locale: withinArrayOrBlockLocale
                });
                selects[selectTableName] = selects[selectTableName].concat(newRows);
            }
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            const valuesToTransform = [];
            if (field.localized) {
                if (typeof fieldData === 'object' && fieldData !== null) {
                    Object.entries(fieldData).forEach(([localeKey, localeData])=>{
                        if (!locales[localeKey]) {
                            locales[localeKey] = {};
                        }
                        valuesToTransform.push({
                            localeKey,
                            ref: locales,
                            value: localeData
                        });
                    });
                }
            } else {
                let ref = row;
                if (forcedLocale) {
                    if (!locales[forcedLocale]) {
                        locales[forcedLocale] = {};
                    }
                    ref = locales[forcedLocale];
                }
                valuesToTransform.push({
                    ref,
                    value: fieldData
                });
            }
            valuesToTransform.forEach(({ localeKey, ref, value })=>{
                if (typeof value !== 'undefined') {
                    let formattedValue = value;
                    if (field.type === 'date') {
                        if (typeof value === 'number' && !Number.isNaN(value)) {
                            formattedValue = new Date(value).toISOString();
                        } else if (value instanceof Date) {
                            formattedValue = value.toISOString();
                        } else if (fieldName === 'updatedAt') {
                            // let the db handle this
                            formattedValue = new Date().toISOString();
                        }
                    }
                    if (localeKey) {
                        ref[localeKey][fieldName] = formattedValue;
                    } else {
                        ref[fieldName] = formattedValue;
                    }
                }
            });
        }
    });
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "transformForWrite": (()=>transformForWrite)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/traverseFields.js [app-rsc] (ecmascript)");
;
const transformForWrite = ({ adapter, data, fields, path = '', tableName })=>{
    // Split out the incoming data into rows to insert / delete
    const rowToInsert = {
        arrays: {},
        blocks: {},
        blocksToDelete: new Set(),
        locales: {},
        numbers: [],
        relationships: [],
        relationshipsToDelete: [],
        row: {},
        selects: {},
        texts: []
    };
    // This function is responsible for building up the
    // above rowToInsert
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        adapter,
        arrays: rowToInsert.arrays,
        baseTableName: tableName,
        blocks: rowToInsert.blocks,
        blocksToDelete: rowToInsert.blocksToDelete,
        columnPrefix: '',
        data,
        fieldPrefix: '',
        fields,
        locales: rowToInsert.locales,
        numbers: rowToInsert.numbers,
        parentTableName: tableName,
        path,
        relationships: rowToInsert.relationships,
        relationshipsToDelete: rowToInsert.relationshipsToDelete,
        row: rowToInsert.row,
        selects: rowToInsert.selects,
        texts: rowToInsert.texts
    });
    return rowToInsert;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/deleteExistingArrayRows.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteExistingArrayRows": (()=>deleteExistingArrayRows)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
const deleteExistingArrayRows = async ({ adapter, db, parentID, tableName })=>{
    const table = adapter.tables[tableName];
    const whereConstraints = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(table._parentID, parentID)
    ];
    await adapter.deleteWhere({
        db,
        tableName,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...whereConstraints)
    });
}; //# sourceMappingURL=deleteExistingArrayRows.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/deleteExistingRowsByPath.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteExistingRowsByPath": (()=>deleteExistingRowsByPath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
const deleteExistingRowsByPath = async ({ adapter, db, localeColumnName = '_locale', parentColumnName = '_parentID', parentID, pathColumnName = '_path', rows, tableName })=>{
    const localizedPathsToDelete = new Set();
    const pathsToDelete = new Set();
    const table = adapter.tables[tableName];
    rows.forEach((row)=>{
        const path = row[pathColumnName];
        const localeData = row[localeColumnName];
        if (typeof path === 'string') {
            if (typeof localeData === 'string') {
                localizedPathsToDelete.add(path);
            } else {
                pathsToDelete.add(path);
            }
        }
    });
    if (localizedPathsToDelete.size > 0) {
        const whereConstraints = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(table[parentColumnName], parentID)
        ];
        if (pathColumnName) {
            whereConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(table[pathColumnName], Array.from(localizedPathsToDelete)));
        }
        await adapter.deleteWhere({
            db,
            tableName,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...whereConstraints)
        });
    }
    if (pathsToDelete.size > 0) {
        const whereConstraints = [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(table[parentColumnName], parentID)
        ];
        if (pathColumnName) {
            whereConstraints.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(table[pathColumnName], Array.from(pathsToDelete)));
        }
        await adapter.deleteWhere({
            db,
            tableName,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"])(...whereConstraints)
        });
    }
}; //# sourceMappingURL=deleteExistingRowsByPath.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/insertArrays.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "insertArrays": (()=>insertArrays)
});
const insertArrays = async ({ adapter, arrays, db, parentRows })=>{
    // Maintain a map of flattened rows by table
    const rowsByTable = {};
    arrays.forEach((arraysByTable, parentRowIndex)=>{
        Object.entries(arraysByTable).forEach(([tableName, arrayRows])=>{
            // If the table doesn't exist in map, initialize it
            if (!rowsByTable[tableName]) {
                rowsByTable[tableName] = {
                    arrays: [],
                    locales: [],
                    rows: []
                };
            }
            const parentID = parentRows[parentRowIndex].id;
            // Add any sub arrays that need to be created
            // We will call this recursively below
            arrayRows.forEach((arrayRow, i)=>{
                if (Object.keys(arrayRow.arrays).length > 0) {
                    rowsByTable[tableName].arrays.push(arrayRow.arrays);
                }
                // Set up parent IDs for both row and locale row
                arrayRow.row._parentID = parentID;
                rowsByTable[tableName].rows.push(arrayRow.row);
                Object.entries(arrayRow.locales).forEach(([arrayRowLocale, arrayRowLocaleData])=>{
                    arrayRowLocaleData._parentID = arrayRow.row.id;
                    arrayRowLocaleData._locale = arrayRowLocale;
                    rowsByTable[tableName].locales.push(arrayRowLocaleData);
                    if (!arrayRow.row.id) {
                        arrayRowLocaleData._getParentID = (rows)=>{
                            const { id } = rows.find((each)=>each._uuid === arrayRow.row._uuid);
                            return id;
                        };
                    }
                });
            });
        });
    });
    // Insert all corresponding arrays
    // (one insert per array table)
    for (const [tableName, row] of Object.entries(rowsByTable)){
        // the nested arrays need the ID for the parentID foreign key
        let insertedRows;
        if (row.rows.length > 0) {
            insertedRows = await adapter.insert({
                db,
                tableName,
                values: row.rows
            });
        }
        // Insert locale rows
        if (adapter.tables[`${tableName}${adapter.localesSuffix}`] && row.locales.length > 0) {
            if (!row.locales[0]._parentID) {
                row.locales = row.locales.map((localeRow)=>{
                    if (typeof localeRow._getParentID === 'function') {
                        localeRow._parentID = localeRow._getParentID(insertedRows);
                        delete localeRow._getParentID;
                    }
                    return localeRow;
                });
            }
            await adapter.insert({
                db,
                tableName: `${tableName}${adapter.localesSuffix}`,
                values: row.locales
            });
        }
        // If there are sub arrays, call this function recursively
        if (row.arrays.length > 0) {
            await insertArrays({
                adapter,
                arrays: row.arrays,
                db,
                parentRows: insertedRows
            });
        }
    }
}; //# sourceMappingURL=insertArrays.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "upsertRow": (()=>upsertRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$buildFindManyArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/buildFindManyArgs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/write/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$deleteExistingArrayRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/deleteExistingArrayRows.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$deleteExistingRowsByPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/deleteExistingRowsByPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$insertArrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/insertArrays.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/ValidationError.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const upsertRow = async ({ id, adapter, data, db, fields, ignoreResult, joinQuery, operation, path = '', req, tableName, upsertTarget, where })=>{
    // Split out the incoming data into the corresponding:
    // base row, locales, relationships, blocks, and arrays
    const rowToInsert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$write$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformForWrite"])({
        adapter,
        data,
        fields,
        path,
        tableName
    });
    // First, we insert the main row
    let insertedRow;
    try {
        if (operation === 'update') {
            const target = upsertTarget || adapter.tables[tableName].id;
            if (id) {
                rowToInsert.row.id = id;
                [insertedRow] = await adapter.insert({
                    db,
                    onConflictDoUpdate: {
                        set: rowToInsert.row,
                        target
                    },
                    tableName,
                    values: rowToInsert.row
                });
            } else {
                [insertedRow] = await adapter.insert({
                    db,
                    onConflictDoUpdate: {
                        set: rowToInsert.row,
                        target,
                        where
                    },
                    tableName,
                    values: rowToInsert.row
                });
            }
        } else {
            [insertedRow] = await adapter.insert({
                db,
                tableName,
                values: rowToInsert.row
            });
        }
        const localesToInsert = [];
        const relationsToInsert = [];
        const textsToInsert = [];
        const numbersToInsert = [];
        const blocksToInsert = {};
        const selectsToInsert = {};
        // If there are locale rows with data, add the parent and locale to each
        if (Object.keys(rowToInsert.locales).length > 0) {
            Object.entries(rowToInsert.locales).forEach(([locale, localeRow])=>{
                localeRow._parentID = insertedRow.id;
                localeRow._locale = locale;
                localesToInsert.push(localeRow);
            });
        }
        // If there are relationships, add parent to each
        if (rowToInsert.relationships.length > 0) {
            rowToInsert.relationships.forEach((relation)=>{
                relation.parent = insertedRow.id;
                relationsToInsert.push(relation);
            });
        }
        // If there are texts, add parent to each
        if (rowToInsert.texts.length > 0) {
            rowToInsert.texts.forEach((textRow)=>{
                textRow.parent = insertedRow.id;
                textsToInsert.push(textRow);
            });
        }
        // If there are numbers, add parent to each
        if (rowToInsert.numbers.length > 0) {
            rowToInsert.numbers.forEach((numberRow)=>{
                numberRow.parent = insertedRow.id;
                numbersToInsert.push(numberRow);
            });
        }
        // If there are selects, add parent to each, and then
        // store by table name and rows
        if (Object.keys(rowToInsert.selects).length > 0) {
            Object.entries(rowToInsert.selects).forEach(([selectTableName, selectRows])=>{
                selectRows.forEach((row)=>{
                    if (typeof row.parent === 'undefined') {
                        row.parent = insertedRow.id;
                    }
                    if (!selectsToInsert[selectTableName]) {
                        selectsToInsert[selectTableName] = [];
                    }
                    selectsToInsert[selectTableName].push(row);
                });
            });
        }
        // If there are blocks, add parent to each, and then
        // store by table name and rows
        Object.keys(rowToInsert.blocks).forEach((blockName)=>{
            rowToInsert.blocks[blockName].forEach((blockRow)=>{
                blockRow.row._parentID = insertedRow.id;
                if (!blocksToInsert[blockName]) {
                    blocksToInsert[blockName] = [];
                }
                if (blockRow.row.uuid) {
                    delete blockRow.row.uuid;
                }
                blocksToInsert[blockName].push(blockRow);
            });
        });
        // //////////////////////////////////
        // INSERT LOCALES
        // //////////////////////////////////
        if (localesToInsert.length > 0) {
            const localeTableName = `${tableName}${adapter.localesSuffix}`;
            const localeTable = adapter.tables[`${tableName}${adapter.localesSuffix}`];
            if (operation === 'update') {
                await adapter.deleteWhere({
                    db,
                    tableName: localeTableName,
                    where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(localeTable._parentID, insertedRow.id)
                });
            }
            await adapter.insert({
                db,
                tableName: localeTableName,
                values: localesToInsert
            });
        }
        // //////////////////////////////////
        // INSERT RELATIONSHIPS
        // //////////////////////////////////
        const relationshipsTableName = `${tableName}${adapter.relationshipsSuffix}`;
        if (operation === 'update') {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$deleteExistingRowsByPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExistingRowsByPath"])({
                adapter,
                db,
                localeColumnName: 'locale',
                parentColumnName: 'parent',
                parentID: insertedRow.id,
                pathColumnName: 'path',
                rows: [
                    ...relationsToInsert,
                    ...rowToInsert.relationshipsToDelete
                ],
                tableName: relationshipsTableName
            });
        }
        if (relationsToInsert.length > 0) {
            await adapter.insert({
                db,
                tableName: relationshipsTableName,
                values: relationsToInsert
            });
        }
        // //////////////////////////////////
        // INSERT hasMany TEXTS
        // //////////////////////////////////
        const textsTableName = `${tableName}_texts`;
        if (operation === 'update') {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$deleteExistingRowsByPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExistingRowsByPath"])({
                adapter,
                db,
                localeColumnName: 'locale',
                parentColumnName: 'parent',
                parentID: insertedRow.id,
                pathColumnName: 'path',
                rows: textsToInsert,
                tableName: textsTableName
            });
        }
        if (textsToInsert.length > 0) {
            await adapter.insert({
                db,
                tableName: textsTableName,
                values: textsToInsert
            });
        }
        // //////////////////////////////////
        // INSERT hasMany NUMBERS
        // //////////////////////////////////
        const numbersTableName = `${tableName}_numbers`;
        if (operation === 'update') {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$deleteExistingRowsByPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExistingRowsByPath"])({
                adapter,
                db,
                localeColumnName: 'locale',
                parentColumnName: 'parent',
                parentID: insertedRow.id,
                pathColumnName: 'path',
                rows: numbersToInsert,
                tableName: numbersTableName
            });
        }
        if (numbersToInsert.length > 0) {
            await adapter.insert({
                db,
                tableName: numbersTableName,
                values: numbersToInsert
            });
        }
        // //////////////////////////////////
        // INSERT BLOCKS
        // //////////////////////////////////
        const insertedBlockRows = {};
        if (operation === 'update') {
            for (const blockName of rowToInsert.blocksToDelete){
                const blockTableName = adapter.tableNameMap.get(`${tableName}_blocks_${blockName}`);
                const blockTable = adapter.tables[blockTableName];
                await adapter.deleteWhere({
                    db,
                    tableName: blockTableName,
                    where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(blockTable._parentID, insertedRow.id)
                });
            }
        }
        for (const [blockName, blockRows] of Object.entries(blocksToInsert)){
            const blockTableName = adapter.tableNameMap.get(`${tableName}_blocks_${blockName}`);
            insertedBlockRows[blockName] = await adapter.insert({
                db,
                tableName: blockTableName,
                values: blockRows.map(({ row })=>row)
            });
            insertedBlockRows[blockName].forEach((row, i)=>{
                blockRows[i].row = row;
            });
            const blockLocaleIndexMap = [];
            const blockLocaleRowsToInsert = blockRows.reduce((acc, blockRow, i)=>{
                if (Object.entries(blockRow.locales).length > 0) {
                    Object.entries(blockRow.locales).forEach(([blockLocale, blockLocaleData])=>{
                        if (Object.keys(blockLocaleData).length > 0) {
                            blockLocaleData._parentID = blockRow.row.id;
                            blockLocaleData._locale = blockLocale;
                            acc.push(blockLocaleData);
                            blockLocaleIndexMap.push(i);
                        }
                    });
                }
                return acc;
            }, []);
            if (blockLocaleRowsToInsert.length > 0) {
                await adapter.insert({
                    db,
                    tableName: `${blockTableName}${adapter.localesSuffix}`,
                    values: blockLocaleRowsToInsert
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$insertArrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insertArrays"])({
                adapter,
                arrays: blockRows.map(({ arrays })=>arrays),
                db,
                parentRows: insertedBlockRows[blockName]
            });
        }
        // //////////////////////////////////
        // INSERT ARRAYS RECURSIVELY
        // //////////////////////////////////
        if (operation === 'update') {
            for (const arrayTableName of Object.keys(rowToInsert.arrays)){
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$deleteExistingArrayRows$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteExistingArrayRows"])({
                    adapter,
                    db,
                    parentID: insertedRow.id,
                    tableName: arrayTableName
                });
            }
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$insertArrays$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["insertArrays"])({
            adapter,
            arrays: [
                rowToInsert.arrays
            ],
            db,
            parentRows: [
                insertedRow
            ]
        });
        // //////////////////////////////////
        // INSERT hasMany SELECTS
        // //////////////////////////////////
        for (const [selectTableName, tableRows] of Object.entries(selectsToInsert)){
            const selectTable = adapter.tables[selectTableName];
            if (operation === 'update') {
                await adapter.deleteWhere({
                    db,
                    tableName: selectTableName,
                    where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(selectTable.parent, insertedRow.id)
                });
            }
            await adapter.insert({
                db,
                tableName: selectTableName,
                values: tableRows
            });
        }
    // //////////////////////////////////
    // Error Handling
    // //////////////////////////////////
    } catch (error) {
        if (error.code === '23505') {
            let fieldName = null;
            // We need to try and find the right constraint for the field but if we can't we fallback to a generic message
            if (adapter.fieldConstraints?.[tableName]) {
                if (adapter.fieldConstraints[tableName]?.[error.constraint]) {
                    fieldName = adapter.fieldConstraints[tableName]?.[error.constraint];
                } else {
                    const replacement = `${tableName}_`;
                    if (error.constraint.includes(replacement)) {
                        const replacedConstraint = error.constraint.replace(replacement, '');
                        if (replacedConstraint && adapter.fieldConstraints[tableName]?.[replacedConstraint]) {
                            fieldName = adapter.fieldConstraints[tableName][replacedConstraint];
                        }
                    }
                }
            }
            if (!fieldName) {
                // Last case scenario we extract the key and value from the detail on the error
                const detail = error.detail;
                const regex = /Key \(([^)]+)\)=\(([^)]+)\)/;
                const match = detail.match(regex);
                if (match) {
                    const key = match[1];
                    fieldName = key;
                }
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]({
                id,
                errors: [
                    {
                        field: fieldName,
                        message: req.t('error:valueMustBeUnique')
                    }
                ]
            }, req.t);
        } else {
            throw error;
        }
    }
    if (ignoreResult) {
        return data;
    }
    // //////////////////////////////////
    // RETRIEVE NEWLY UPDATED ROW
    // //////////////////////////////////
    const findManyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$buildFindManyArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFindManyArgs"])({
        adapter,
        depth: 0,
        fields,
        joinQuery,
        tableName
    });
    findManyArgs.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(adapter.tables[tableName].id, insertedRow.id);
    const doc = await db.query[tableName].findFirst(findManyArgs);
    // //////////////////////////////////
    // TRANSFORM DATA
    // //////////////////////////////////
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transform"])({
        adapter,
        config: adapter.payload.config,
        data: doc,
        fields,
        joinQuery
    });
    return result;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/create.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "create": (()=>create)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
;
;
const create = async function create({ collection: collectionSlug, data, req }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collection = this.payload.collections[collectionSlug].config;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collection.slug));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        adapter: this,
        data,
        db,
        fields: collection.fields,
        operation: 'create',
        req,
        tableName
    });
    return result;
}; //# sourceMappingURL=create.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createGlobal.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createGlobal": (()=>createGlobal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
;
;
async function createGlobal({ slug, data, req = {} }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const globalConfig = this.payload.globals.config.find((config)=>config.slug === slug);
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(globalConfig.slug));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        adapter: this,
        data,
        db,
        fields: globalConfig.fields,
        operation: 'create',
        req,
        tableName
    });
    return result;
} //# sourceMappingURL=createGlobal.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createGlobalVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createGlobalVersion": (()=>createGlobalVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
;
;
;
;
async function createGlobalVersion({ autosave, createdAt, globalSlug, publishedLocale, req = {}, snapshot, updatedAt, versionData }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const global = this.payload.globals.config.find(({ slug })=>slug === globalSlug);
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(global.slug)}${this.versionsSuffix}`);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        adapter: this,
        data: {
            autosave,
            createdAt,
            latest: true,
            publishedLocale,
            snapshot,
            updatedAt,
            version: versionData
        },
        db,
        fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(this.payload.config, global),
        operation: 'create',
        req,
        tableName
    });
    const table = this.tables[tableName];
    if (global.versions.drafts) {
        await this.execute({
            db,
            sql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
          UPDATE ${table}
          SET latest = false
          WHERE ${table.id} != ${result.id};
        `
        });
    }
    return result;
} //# sourceMappingURL=createGlobalVersion.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createTableName.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createTableName": (()=>createTableName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
const createTableName = ({ adapter, config: { name, slug }, config, parentTableName, prefix = '', target = 'dbName', throwValidationError = false, versions = false, versionsCustomName = false })=>{
    let customNameDefinition = config[target];
    let defaultTableName = `${prefix}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(name ?? slug)}`;
    if (versions) {
        defaultTableName = `_${defaultTableName}${adapter.versionsSuffix}`;
    }
    let customTableNameResult;
    if (!customNameDefinition && target === 'enumName') {
        customNameDefinition = config['dbName'];
    }
    if (customNameDefinition) {
        customTableNameResult = typeof customNameDefinition === 'function' ? customNameDefinition({
            tableName: parentTableName
        }) : customNameDefinition;
        if (versionsCustomName) {
            customTableNameResult = `_${customTableNameResult}${adapter.versionsSuffix}`;
        }
    }
    const result = customTableNameResult || defaultTableName;
    adapter.tableNameMap.set(defaultTableName, result);
    if (!throwValidationError) {
        return result;
    }
    if (result.length > 63) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Exceeded max identifier length for table or enum name of 63 characters. Invalid name: ${result}`);
    }
    return result;
}; //# sourceMappingURL=createTableName.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createVersion": (()=>createVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
;
;
;
;
async function createVersion({ autosave, collectionSlug, createdAt, parent, publishedLocale, req = {}, snapshot, updatedAt, versionData }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collection = this.payload.collections[collectionSlug].config;
    const defaultTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collection.slug);
    const tableName = this.tableNameMap.get(`_${defaultTableName}${this.versionsSuffix}`);
    const version = {
        ...versionData
    };
    if (version.id) {
        delete version.id;
    }
    const data = {
        autosave,
        createdAt,
        latest: true,
        parent,
        publishedLocale,
        snapshot,
        updatedAt,
        version
    };
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        adapter: this,
        data,
        db,
        fields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(this.payload.config, collection),
        operation: 'create',
        req,
        tableName
    });
    const table = this.tables[tableName];
    if (collection.versions.drafts) {
        await this.execute({
            db,
            sql: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`
        UPDATE ${table}
        SET latest = false
        WHERE ${table.id} != ${result.id}
          AND ${table.parent} = ${parent}
      `
        });
    }
    return result;
} //# sourceMappingURL=createVersion.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/selectDistinct.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "selectDistinct": (()=>selectDistinct)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/chainMethods.js [app-rsc] (ecmascript)");
;
const selectDistinct = ({ adapter, chainedMethods = [], db, joins, selectFields, tableName, where })=>{
    if (Object.keys(joins).length > 0) {
        if (where) {
            chainedMethods.push({
                args: [
                    where
                ],
                method: 'where'
            });
        }
        joins.forEach(({ condition, table })=>{
            chainedMethods.push({
                args: [
                    table,
                    condition
                ],
                method: 'leftJoin'
            });
        });
        let query;
        const table = adapter.tables[tableName];
        if (adapter.name === 'postgres') {
            query = db.selectDistinct(selectFields).from(table);
        }
        if (adapter.name === 'sqlite') {
            query = db.selectDistinct(selectFields).from(table);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainMethods"])({
            methods: chainedMethods,
            query
        });
    }
}; //# sourceMappingURL=selectDistinct.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "findMany": (()=>findMany)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$selectDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/selectDistinct.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$buildFindManyArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/buildFindManyArgs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
;
;
;
;
const findMany = async function find({ adapter, fields, joins: joinQuery, limit: limitArg, locale, page = 1, pagination, req = {}, skip, sort, tableName, versions, where: whereArg }) {
    const db = adapter.sessions[await req.transactionID]?.db || adapter.drizzle;
    let limit = limitArg;
    let totalDocs;
    let totalPages;
    let hasPrevPage;
    let hasNextPage;
    let pagingCounter;
    const offset = skip || (page - 1) * limit;
    if (limit === 0) {
        limit = undefined;
    }
    const { joins, orderBy, selectFields, where } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        adapter,
        fields,
        locale,
        sort,
        tableName,
        where: whereArg
    });
    const orderedIDMap = {};
    let orderedIDs;
    const selectDistinctMethods = [];
    if (orderBy) {
        selectDistinctMethods.push({
            args: [
                ()=>orderBy.map(({ column, order })=>order(column))
            ],
            method: 'orderBy'
        });
    }
    const findManyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$buildFindManyArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFindManyArgs"])({
        adapter,
        depth: 0,
        fields,
        joinQuery,
        joins,
        tableName,
        versions
    });
    selectDistinctMethods.push({
        args: [
            offset
        ],
        method: 'offset'
    });
    selectDistinctMethods.push({
        args: [
            limit
        ],
        method: 'limit'
    });
    const selectDistinctResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$selectDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["selectDistinct"])({
        adapter,
        chainedMethods: selectDistinctMethods,
        db,
        joins,
        selectFields,
        tableName,
        where
    });
    if (selectDistinctResult) {
        if (selectDistinctResult.length === 0) {
            return {
                docs: [],
                hasNextPage: false,
                hasPrevPage: false,
                limit,
                nextPage: null,
                page: 1,
                pagingCounter: 0,
                prevPage: null,
                totalDocs: 0,
                totalPages: 0
            };
        } else {
            // set the id in an object for sorting later
            selectDistinctResult.forEach(({ id }, i)=>{
                orderedIDMap[id] = i;
            });
            orderedIDs = Object.keys(orderedIDMap);
            findManyArgs.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(adapter.tables[tableName].id, orderedIDs);
        }
    } else {
        findManyArgs.limit = limit;
        findManyArgs.offset = offset;
        findManyArgs.orderBy = ()=>orderBy.map(({ column, order })=>order(column));
        if (where) {
            findManyArgs.where = where;
        }
    }
    const findPromise = db.query[tableName].findMany(findManyArgs);
    if (pagination !== false && (orderedIDs ? orderedIDs?.length <= limit : true)) {
        totalDocs = await adapter.countDistinct({
            db,
            joins,
            tableName,
            where
        });
        totalPages = typeof limit === 'number' && limit !== 0 ? Math.ceil(totalDocs / limit) : 1;
        hasPrevPage = page > 1;
        hasNextPage = totalPages > page;
        pagingCounter = (page - 1) * limit + 1;
    }
    const rawDocs = await findPromise;
    // sort rawDocs from selectQuery
    if (Object.keys(orderedIDMap).length > 0) {
        rawDocs.sort((a, b)=>orderedIDMap[a.id] - orderedIDMap[b.id]);
    }
    if (pagination === false || !totalDocs) {
        totalDocs = rawDocs.length;
        totalPages = 1;
        pagingCounter = 1;
        hasPrevPage = false;
        hasNextPage = false;
    }
    const docs = rawDocs.map((data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transform"])({
            adapter,
            config: adapter.payload.config,
            data,
            fields,
            joinQuery
        });
    });
    return {
        docs,
        hasNextPage,
        hasPrevPage,
        limit: limitArg,
        nextPage: hasNextPage ? page + 1 : null,
        page,
        pagingCounter,
        prevPage: hasPrevPage ? page - 1 : null,
        totalDocs,
        totalPages
    };
}; //# sourceMappingURL=findMany.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/deleteMany.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteMany": (()=>deleteMany)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
;
;
const deleteMany = async function deleteMany({ collection, req = {}, where }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collectionConfig = this.payload.collections[collection].config;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug));
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields: collectionConfig.fields,
        limit: 0,
        locale: req.locale,
        page: 1,
        pagination: false,
        req,
        tableName,
        where
    });
    const ids = [];
    result.docs.forEach((data)=>{
        ids.push(data.id);
    });
    if (ids.length > 0) {
        await this.deleteWhere({
            db,
            tableName,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(this.tables[tableName].id, ids)
        });
    }
}; //# sourceMappingURL=deleteMany.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/deleteOne.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteOne": (()=>deleteOne)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$buildFindManyArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/buildFindManyArgs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$selectDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/selectDistinct.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transform/read/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const deleteOne = async function deleteOne({ collection: collectionSlug, joins: joinQuery, req = {}, where: whereArg }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collection = this.payload.collections[collectionSlug].config;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collection.slug));
    let docToDelete;
    const { joins, selectFields, where } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        adapter: this,
        fields: collection.fields,
        locale: req.locale,
        tableName,
        where: whereArg
    });
    const selectDistinctResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$selectDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["selectDistinct"])({
        adapter: this,
        chainedMethods: [
            {
                args: [
                    1
                ],
                method: 'limit'
            }
        ],
        db,
        joins,
        selectFields,
        tableName,
        where
    });
    if (selectDistinctResult?.[0]?.id) {
        docToDelete = await db.query[tableName].findFirst({
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(this.tables[tableName].id, selectDistinctResult[0].id)
        });
    } else {
        const findManyArgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$buildFindManyArgs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFindManyArgs"])({
            adapter: this,
            depth: 0,
            fields: collection.fields,
            joinQuery,
            tableName
        });
        findManyArgs.where = where;
        docToDelete = await db.query[tableName].findFirst(findManyArgs);
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transform$2f$read$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transform"])({
        adapter: this,
        config: this.payload.config,
        data: docToDelete,
        fields: collection.fields,
        joinQuery
    });
    await this.deleteWhere({
        db,
        tableName,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"])(this.tables[tableName].id, docToDelete.id)
    });
    return result;
}; //# sourceMappingURL=deleteOne.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/deleteVersions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteVersions": (()=>deleteVersions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
;
;
;
const deleteVersions = async function deleteVersion({ collection, locale, req = {}, where: where }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collectionConfig = this.payload.collections[collection].config;
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug)}${this.versionsSuffix}`);
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(this.payload.config, collectionConfig);
    const { docs } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields,
        limit: 0,
        locale,
        page: 1,
        pagination: false,
        req,
        tableName,
        where
    });
    const ids = [];
    docs.forEach((doc)=>{
        ids.push(doc.id);
    });
    if (ids.length > 0) {
        await this.deleteWhere({
            db,
            tableName,
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"])(this.tables[tableName].id, ids)
        });
    }
    return docs;
}; //# sourceMappingURL=deleteVersions.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/destroy.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// eslint-disable-next-line @typescript-eslint/require-await
__turbopack_esm__({
    "destroy": (()=>destroy)
});
const destroy = async function destroy() {
    if (this.enums) {
        this.enums = {};
    }
    this.schema = {};
    this.tables = {};
    this.relations = {};
    this.fieldConstraints = {};
    this.drizzle = undefined;
    this.initializing = new Promise((res, rej)=>{
        this.resolveInitializing = res;
        this.rejectInitializing = rej;
    });
}; //# sourceMappingURL=destroy.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "find": (()=>find)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
;
;
const find = async function find({ collection, joins, limit, locale, page = 1, pagination, req = {}, sort: sortArg, where }) {
    const collectionConfig = this.payload.collections[collection].config;
    const sort = sortArg !== undefined && sortArg !== null ? sortArg : collectionConfig.defaultSort;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields: collectionConfig.fields,
        joins,
        limit,
        locale,
        page,
        pagination,
        req,
        sort,
        tableName,
        where
    });
}; //# sourceMappingURL=find.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findGlobal.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "findGlobal": (()=>findGlobal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
;
;
const findGlobal = async function findGlobal({ slug, locale, req, where }) {
    const globalConfig = this.payload.globals.config.find((config)=>config.slug === slug);
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(globalConfig.slug));
    const { docs: [doc] } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields: globalConfig.fields,
        limit: 1,
        locale,
        pagination: false,
        req,
        tableName,
        where
    });
    if (doc) {
        doc.globalType = slug;
        return doc;
    }
    return {};
}; //# sourceMappingURL=findGlobal.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findGlobalVersions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "findGlobalVersions": (()=>findGlobalVersions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
;
;
;
const findGlobalVersions = async function findGlobalVersions({ global, limit, locale, page, pagination, req = {}, skip, sort: sortArg, where }) {
    const globalConfig = this.payload.globals.config.find(({ slug })=>slug === global);
    const sort = sortArg !== undefined && sortArg !== null ? sortArg : '-createdAt';
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(globalConfig.slug)}${this.versionsSuffix}`);
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(this.payload.config, globalConfig);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields,
        limit,
        locale,
        page,
        pagination,
        req,
        skip,
        sort,
        tableName,
        where
    });
}; //# sourceMappingURL=findGlobalVersions.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findMigrationDir.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "findMigrationDir": (()=>findMigrationDir)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (path, cjs)");
;
;
function findMigrationDir(migrationDir) {
    const cwd = process.cwd();
    const srcDir = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'src/migrations');
    const distDir = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'dist/migrations');
    const relativeMigrations = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(cwd, 'migrations');
    // Use arg if provided
    if (migrationDir) {
        return migrationDir;
    }
    // Check other common locations
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(srcDir)) {
        return srcDir;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(distDir)) {
        return distDir;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(relativeMigrations)) {
        return relativeMigrations;
    }
    return srcDir;
} //# sourceMappingURL=findMigrationDir.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findOne.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "findOne": (()=>findOne)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
;
;
async function findOne({ collection, joins, locale, req = {}, where }) {
    const collectionConfig = this.payload.collections[collection].config;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug));
    const { docs } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields: collectionConfig.fields,
        joins,
        limit: 1,
        locale,
        page: 1,
        pagination: false,
        req,
        sort: undefined,
        tableName,
        where
    });
    return docs?.[0] || null;
} //# sourceMappingURL=findOne.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findVersions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "findVersions": (()=>findVersions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)");
;
;
;
const findVersions = async function findVersions({ collection, limit, locale, page, pagination, req = {}, skip, sort: sortArg, where }) {
    const collectionConfig = this.payload.collections[collection].config;
    const sort = sortArg !== undefined && sortArg !== null ? sortArg : collectionConfig.defaultSort;
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug)}${this.versionsSuffix}`);
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(this.payload.config, collectionConfig);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields,
        limit,
        locale,
        page,
        pagination,
        req,
        skip,
        sort,
        tableName,
        where
    });
}; //# sourceMappingURL=findVersions.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/migrationTableExists.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrationTableExists": (()=>migrationTableExists)
});
const migrationTableExists = async (adapter)=>{
    let statement;
    if (adapter.name === 'postgres') {
        const prependSchema = adapter.schemaName ? `"${adapter.schemaName}".` : '';
        statement = `SELECT to_regclass('${prependSchema}"payload_migrations"') AS exists;`;
    }
    if (adapter.name === 'sqlite') {
        statement = `
      SELECT CASE
               WHEN COUNT(*) > 0 THEN 1
               ELSE 0
               END AS 'exists'
      FROM sqlite_master
      WHERE type = 'table'
        AND name = 'payload_migrations';`;
    }
    const result = await adapter.execute({
        drizzle: adapter.drizzle,
        raw: statement
    });
    const [row] = result.rows;
    return row && typeof row === 'object' && 'exists' in row && !!row.exists;
}; //# sourceMappingURL=migrationTableExists.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/parseError.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Format error message with hint if available
 */ __turbopack_esm__({
    "parseError": (()=>parseError)
});
const parseError = (err, msg)=>{
    let formattedMsg = `${msg}`;
    if (err instanceof Error) {
        formattedMsg += ` ${err.message}.`;
        // Check if the error has a hint property
        if ('hint' in err && typeof err.hint === 'string') {
            formattedMsg += ` ${err.hint}.`;
        }
    }
    return formattedMsg;
}; //# sourceMappingURL=parseError.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrate": (()=>migrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prompts/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/migrationTableExists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/parseError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
;
;
const migrate = async function migrate(args) {
    const { payload } = this;
    const migrationFiles = args?.migrations || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    if (!migrationFiles.length) {
        payload.logger.info({
            msg: 'No migrations to run.'
        });
        return;
    }
    let latestBatch = 0;
    let migrationsInDB = [];
    const hasMigrationTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTableExists"])(this);
    if (hasMigrationTable) {
        ({ docs: migrationsInDB } = await payload.find({
            collection: 'payload-migrations',
            limit: 0,
            sort: '-name'
        }));
        if (Number(migrationsInDB?.[0]?.batch) > 0) {
            latestBatch = Number(migrationsInDB[0]?.batch);
        }
    }
    if (migrationsInDB.find((m)=>m.batch === -1)) {
        const { confirm: runMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            name: 'confirm',
            type: 'confirm',
            initial: false,
            message: "It looks like you've run Payload in dev mode, meaning you've dynamically pushed changes to your database.\n\n" + "If you'd like to run migrations, data loss will occur. Would you like to proceed?"
        }, {
            onCancel: ()=>{
                process.exit(0);
            }
        });
        if (!runMigrations) {
            process.exit(0);
        }
    }
    const newBatch = latestBatch + 1;
    // Execute 'up' function for each migration sequentially
    for (const migration of migrationFiles){
        const alreadyRan = migrationsInDB.find((existing)=>existing.name === migration.name);
        // If already ran, skip
        if (alreadyRan) {
            continue;
        }
        await runMigrationFile(payload, migration, newBatch);
    }
};
async function runMigrationFile(payload, migration, batch) {
    const start = Date.now();
    const req = {
        payload
    };
    const adapter = payload.db;
    payload.logger.info({
        msg: `Migrating: ${migration.name}`
    });
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
        const db = adapter?.sessions[await req.transactionID]?.db || adapter.drizzle;
        await migration.up({
            db,
            payload,
            req
        });
        payload.logger.info({
            msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
        });
        await payload.create({
            collection: 'payload-migrations',
            data: {
                name: migration.name,
                batch
            },
            req
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
    } catch (err) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
        payload.logger.error({
            err,
            msg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseError"])(err, `Error running migration ${migration.name}`)
        });
        process.exit(1);
    }
} //# sourceMappingURL=migrate.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateDown.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateDown": (()=>migrateDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/migrationTableExists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/parseError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
;
async function migrateDown() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
        return;
    }
    payload.logger.info({
        msg: `Rolling back batch ${latestBatch} consisting of ${existingMigrations.length} migration(s).`
    });
    const latestBatchMigrations = existingMigrations.filter(({ batch })=>batch === latestBatch);
    for (const migration of latestBatchMigrations){
        const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
        if (!migrationFile) {
            throw new Error(`Migration ${migration.name} not found locally.`);
        }
        const start = Date.now();
        const req = {
            payload
        };
        try {
            payload.logger.info({
                msg: `Migrating down: ${migrationFile.name}`
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            await migrationFile.down({
                payload,
                req
            });
            payload.logger.info({
                msg: `Migrated down:  ${migrationFile.name} (${Date.now() - start}ms)`
            });
            const tableExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTableExists"])(this);
            if (tableExists) {
                await payload.delete({
                    id: migration.id,
                    collection: 'payload-migrations',
                    req
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseError"])(err, `Error migrating down ${migrationFile.name}. Rolling back.`)
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateDown.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateFresh.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateFresh": (()=>migrateFresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prompts/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/parseError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
;
async function migrateFresh({ forceAcceptWarning = false }) {
    const { payload } = this;
    if (forceAcceptWarning === false) {
        const { confirm: acceptWarning } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            name: 'confirm',
            type: 'confirm',
            initial: false,
            message: `WARNING: This will drop your database and run all migrations. Are you sure you want to proceed?`
        }, {
            onCancel: ()=>{
                process.exit(0);
            }
        });
        if (!acceptWarning) {
            process.exit(0);
        }
    }
    payload.logger.info({
        msg: `Dropping database.`
    });
    await this.dropDatabase({
        adapter: this
    });
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    payload.logger.debug({
        msg: `Found ${migrationFiles.length} migration files.`
    });
    const req = {
        payload
    };
    // Run all migrate up
    for (const migration of migrationFiles){
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            const start = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            const adapter = payload.db;
            const db = adapter?.sessions[await req.transactionID]?.db || adapter.drizzle;
            await migration.up({
                db,
                payload,
                req
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    batch: 1
                },
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseError"])(err, `Error running migration ${migration.name}. Rolling back`)
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateFresh.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateRefresh.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateRefresh": (()=>migrateRefresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/migrationTableExists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/parseError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
;
async function migrateRefresh() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
        return;
    }
    payload.logger.info({
        msg: `Rolling back batch ${latestBatch} consisting of ${existingMigrations.length} migration(s).`
    });
    const req = {
        payload
    };
    // Reverse order of migrations to rollback
    existingMigrations.reverse();
    for (const migration of existingMigrations){
        try {
            const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
            if (!migrationFile) {
                throw new Error(`Migration ${migration.name} not found locally.`);
            }
            payload.logger.info({
                msg: `Migrating down: ${migration.name}`
            });
            const start = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            await migrationFile.down({
                payload,
                req
            });
            payload.logger.info({
                msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
            });
            const tableExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTableExists"])(this);
            if (tableExists) {
                await payload.delete({
                    collection: 'payload-migrations',
                    req,
                    where: {
                        name: {
                            equals: migration.name
                        }
                    }
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseError"])(err, `Error running migration ${migration.name}. Rolling back.`)
            });
            process.exit(1);
        }
    }
    // Run all migrate up
    for (const migration of migrationFiles){
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            const start = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            await migration.up({
                payload,
                req
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    executed: true
                },
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$parseError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseError"])(err, `Error running migration ${migration.name}. Rolling back.`)
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateRefresh.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateReset.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateReset": (()=>migrateReset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/migrationTableExists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)");
;
;
async function migrateReset() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to reset.'
        });
        return;
    }
    const req = {
        payload
    };
    // Rollback all migrations in order
    for (const migration of existingMigrations){
        const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
        try {
            if (!migrationFile) {
                throw new Error(`Migration ${migration.name} not found locally.`);
            }
            const start = Date.now();
            payload.logger.info({
                msg: `Migrating down: ${migrationFile.name}`
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            await migrationFile.down({
                payload,
                req
            });
            payload.logger.info({
                msg: `Migrated down:  ${migrationFile.name} (${Date.now() - start}ms)`
            });
            const tableExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTableExists"])(this);
            if (tableExists) {
                await payload.delete({
                    id: migration.id,
                    collection: 'payload-migrations',
                    req
                });
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            let msg = `Error running migration ${migrationFile.name}.`;
            if (err instanceof Error) {
                msg += ` ${err.message}`;
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg
            });
            process.exit(1);
        }
    }
    // Delete dev migration
    const tableExists = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTableExists"])(this);
    if (tableExists) {
        try {
            await payload.delete({
                collection: 'payload-migrations',
                where: {
                    batch: {
                        equals: -1
                    }
                }
            });
        } catch (err) {
            payload.logger.error({
                err,
                msg: 'Error deleting dev migration'
            });
        }
    }
} //# sourceMappingURL=migrateReset.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateStatus.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateStatus": (()=>migrateStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$console$2d$table$2d$printer$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/console-table-printer/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/migrationTableExists.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/getMigrations.js [app-rsc] (ecmascript)");
;
;
;
async function migrateStatus() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    payload.logger.debug({
        msg: `Found ${migrationFiles.length} migration files.`
    });
    let existingMigrations = [];
    const hasMigrationTable = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$migrationTableExists$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["migrationTableExists"])(this);
    if (hasMigrationTable) {
        ({ existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrations"])({
            payload
        }));
    }
    if (!migrationFiles.length) {
        payload.logger.info({
            msg: 'No migrations found.'
        });
        return;
    }
    // Compare migration files to existing migrations
    const statuses = migrationFiles.map((migration)=>{
        const existingMigration = existingMigrations.find((m)=>m.name === migration.name);
        return {
            Name: migration.name,
            Batch: existingMigration?.batch,
            Ran: existingMigration ? 'Yes' : 'No'
        };
    });
    const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$console$2d$table$2d$printer$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"]();
    statuses.forEach((s)=>{
        p.addRow(s, {
            color: s.Ran === 'Yes' ? 'green' : 'red'
        });
    });
    p.printTable();
} //# sourceMappingURL=migrateStatus.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/operatorMap.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "operatorMap": (()=>operatorMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/expressions/conditions.js [app-rsc] (ecmascript)");
;
const operatorMap = {
    and: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["and"],
    contains: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ilike"],
    equals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["eq"],
    exists: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNotNull"],
    greater_than: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gt"],
    greater_than_equal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["gte"],
    in: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["inArray"],
    isNull: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNull"],
    less_than: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lt"],
    less_than_equal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lte"],
    like: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ilike"],
    not_equals: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ne"],
    // TODO: geojson queries
    // intersects: intersects,
    // near: near,
    // within: within,
    // all: all,
    not_in: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notInArray"],
    or: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["or"]
}; //# sourceMappingURL=operatorMap.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queryDrafts.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "queryDrafts": (()=>queryDrafts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/findMany.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
;
;
;
const queryDrafts = async function queryDrafts({ collection, joins, limit, locale, page = 1, pagination, req = {}, sort, where }) {
    const collectionConfig = this.payload.collections[collection].config;
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug)}${this.versionsSuffix}`);
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(this.payload.config, collectionConfig);
    const combinedWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])({
        latest: {
            equals: true
        }
    }, where);
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$findMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findMany"])({
        adapter: this,
        fields,
        joins,
        limit,
        locale,
        page,
        pagination,
        req,
        sort,
        tableName,
        versions: true,
        where: combinedWhere
    });
    return {
        ...result,
        docs: result.docs.map((doc)=>{
            doc = {
                id: doc.parent,
                ...doc.version
            };
            return doc;
        })
    };
}; //# sourceMappingURL=queryDrafts.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transactions/beginTransaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "beginTransaction": (()=>beginTransaction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
;
const beginTransaction = async function beginTransaction(options) {
    let id;
    try {
        id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
        let reject;
        let resolve;
        let transaction;
        let transactionReady;
        // Await initialization here
        // Prevent race conditions where the adapter may be
        // re-initializing, and `this.drizzle` is potentially undefined
        await this.initializing;
        // Drizzle only exposes a transactions API that is sufficient if you
        // can directly pass around the `tx` argument. But our operations are spread
        // over many files and we don't want to pass the `tx` around like that,
        // so instead, we "lift" up the `resolve` and `reject` methods
        // and will call them in our respective transaction methods
        const done = this.drizzle.transaction(async (tx)=>{
            transaction = tx;
            await new Promise((res, rej)=>{
                resolve = ()=>{
                    res();
                    return done;
                };
                reject = ()=>{
                    // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                    rej();
                    return done;
                };
                transactionReady();
            });
        }, options || this.transactionOptions).catch(()=>{
        // swallow
        });
        // Need to wait until the transaction is ready
        // before binding its `resolve` and `reject` methods below
        await new Promise((resolve)=>transactionReady = resolve);
        this.sessions[id] = {
            db: transaction,
            reject,
            resolve
        };
    } catch (err) {
        this.payload.logger.error({
            err,
            msg: `Error: cannot begin transaction: ${err.message}`
        });
        process.exit(1);
    }
    return id;
}; //# sourceMappingURL=beginTransaction.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transactions/commitTransaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "commitTransaction": (()=>commitTransaction)
});
const commitTransaction = async function commitTransaction(id) {
    if (id instanceof Promise) {
        return;
    }
    // if the session was deleted it has already been aborted
    if (!this.sessions[id]) {
        return;
    }
    try {
        await this.sessions[id].resolve();
    } catch (err) {
        await this.sessions[id].reject();
    }
    delete this.sessions[id];
}; //# sourceMappingURL=commitTransaction.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transactions/rollbackTransaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "rollbackTransaction": (()=>rollbackTransaction)
});
const rollbackTransaction = async function rollbackTransaction(incomingID = '') {
    const transactionID = incomingID instanceof Promise ? await incomingID : incomingID;
    // if multiple operations are using the same transaction, the first will flow through and delete the session.
    // subsequent calls should be ignored.
    if (!this.sessions[transactionID]) {
        return;
    }
    // end the session promise in failure by calling reject
    await this.sessions[transactionID].reject();
    // delete the session causing any other operations with the same transaction to fail
    delete this.sessions[transactionID];
}; //# sourceMappingURL=rollbackTransaction.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/update.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "updateOne": (()=>updateOne)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$selectDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/selectDistinct.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
;
;
;
;
const updateOne = async function updateOne({ id, collection: collectionSlug, data, draft, joins: joinQuery, locale, req, where: whereArg }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collection = this.payload.collections[collectionSlug].config;
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collection.slug));
    const whereToUse = whereArg || {
        id: {
            equals: id
        }
    };
    let idToUpdate = id;
    const { joins, selectFields, where } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        adapter: this,
        fields: collection.fields,
        locale,
        tableName,
        where: whereToUse
    });
    const selectDistinctResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$selectDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["selectDistinct"])({
        adapter: this,
        chainedMethods: [
            {
                args: [
                    1
                ],
                method: 'limit'
            }
        ],
        db,
        joins,
        selectFields,
        tableName,
        where
    });
    if (selectDistinctResult?.[0]?.id) {
        idToUpdate = selectDistinctResult?.[0]?.id;
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        id: idToUpdate,
        adapter: this,
        data,
        db,
        fields: collection.fields,
        joinQuery,
        operation: 'update',
        req,
        tableName
    });
    return result;
}; //# sourceMappingURL=update.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/updateGlobal.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "updateGlobal": (()=>updateGlobal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
;
;
async function updateGlobal({ slug, data, req = {} }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const globalConfig = this.payload.globals.config.find((config)=>config.slug === slug);
    const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(globalConfig.slug));
    const existingGlobal = await db.query[tableName].findFirst({});
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        ...existingGlobal ? {
            id: existingGlobal.id,
            operation: 'update'
        } : {
            operation: 'create'
        },
        adapter: this,
        data,
        db,
        fields: globalConfig.fields,
        req,
        tableName
    });
    return result;
} //# sourceMappingURL=updateGlobal.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/updateGlobalVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "updateGlobalVersion": (()=>updateGlobalVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
;
;
;
;
async function updateGlobalVersion({ id, global, locale, req = {}, versionData, where: whereArg }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const globalConfig = this.payload.globals.config.find(({ slug })=>slug === global);
    const whereToUse = whereArg || {
        id: {
            equals: id
        }
    };
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(globalConfig.slug)}${this.versionsSuffix}`);
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(this.payload.config, globalConfig);
    const { where } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        adapter: this,
        fields,
        locale,
        tableName,
        where: whereToUse
    });
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        id,
        adapter: this,
        data: versionData,
        db,
        fields,
        operation: 'update',
        req,
        tableName,
        where
    });
    return result;
} //# sourceMappingURL=updateGlobalVersion.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/updateVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "updateVersion": (()=>updateVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/buildQuery.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)");
;
;
;
;
async function updateVersion({ id, collection, locale, req = {}, versionData, where: whereArg }) {
    const db = this.sessions[await req?.transactionID]?.db || this.drizzle;
    const collectionConfig = this.payload.collections[collection].config;
    const whereToUse = whereArg || {
        id: {
            equals: id
        }
    };
    const tableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collectionConfig.slug)}${this.versionsSuffix}`);
    const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(this.payload.config, collectionConfig);
    const { where } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$buildQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
        adapter: this,
        fields,
        locale,
        tableName,
        where: whereToUse
    });
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["upsertRow"])({
        id,
        adapter: this,
        data: versionData,
        db,
        fields,
        operation: 'update',
        req,
        tableName,
        where
    });
    return result;
} //# sourceMappingURL=updateVersion.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/buildIndexName.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildIndexName": (()=>buildIndexName)
});
const buildIndexName = ({ name, adapter, number = 0 })=>{
    const indexName = `${name}${number ? `_${number}` : ''}_idx`;
    if (!adapter.indexes.has(indexName)) {
        adapter.indexes.add(indexName);
        return indexName;
    }
    return buildIndexName({
        name,
        adapter,
        number: number + 1
    });
}; //# sourceMappingURL=buildIndexName.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/extendDrizzleTable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Implemented from:
 * https://github.com/drizzle-team/drizzle-orm/blob/main/drizzle-orm/src/pg-core/table.ts#L73
 * Drizzle uses @internal JSDoc to remove their internal methods from types, for example
 * Table.Symbol, columnBuilder.build - but they actually exist.
 */ __turbopack_esm__({
    "extendDrizzleTable": (()=>extendDrizzleTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/table.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
const { Symbol: DrizzleSymbol } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$table$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"];
const extendDrizzleTable = ({ columns, extraConfig, table })=>{
    const InlineForeignKeys = Object.getOwnPropertySymbols(table).find((symbol)=>{
        return symbol.description?.includes('InlineForeignKeys');
    });
    if (!InlineForeignKeys) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Error when finding InlineForeignKeys Symbol`, 500);
    }
    if (columns) {
        for (const [name, columnBuilder] of Object.entries(columns)){
            const column = columnBuilder.build(table);
            table[name] = column;
            table[InlineForeignKeys].push(...columnBuilder.buildForeignKeys(column, table));
            table[DrizzleSymbol.Columns][name] = column;
            table[DrizzleSymbol.ExtraConfigColumns][name] = 'buildExtraConfigColumn' in columnBuilder ? columnBuilder.buildExtraConfigColumn(table) : column;
        }
    }
    if (extraConfig) {
        const originalExtraConfigBuilder = table[DrizzleSymbol.ExtraConfigBuilder];
        table[DrizzleSymbol.ExtraConfigBuilder] = (t)=>{
            return {
                ...originalExtraConfigBuilder(t),
                ...extraConfig(t)
            };
        };
    }
}; //# sourceMappingURL=extendDrizzleTable.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/executeSchemaHooks.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "executeSchemaHooks": (()=>executeSchemaHooks)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$extendDrizzleTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/extendDrizzleTable.js [app-rsc] (ecmascript)");
;
const executeSchemaHooks = async ({ type, adapter })=>{
    for (const hook of adapter[type]){
        const result = await hook({
            adapter,
            extendTable: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$extendDrizzleTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extendDrizzleTable"],
            schema: {
                enums: adapter.enums,
                relations: adapter.relations,
                tables: adapter.tables
            }
        });
        if (result.enums) {
            adapter.enums = result.enums;
        }
        adapter.tables = result.tables;
        adapter.relations = result.relations;
    }
}; //# sourceMappingURL=executeSchemaHooks.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/hasLocalesTable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "hasLocalesTable": (()=>hasLocalesTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const hasLocalesTable = (fields)=>{
    return fields.some((field)=>{
        // arrays always get a separate table
        if (field.type === 'array') {
            return false;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.localized) {
            return true;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field)) {
            return hasLocalesTable(field.fields);
        }
        if (field.type === 'tabs') {
            return field.tabs.some((tab)=>hasLocalesTable(tab.fields));
        }
        return false;
    });
}; //# sourceMappingURL=hasLocalesTable.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/pushDevSchema.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "pushDevSchema": (()=>pushDevSchema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prompts/index.js [app-rsc] (ecmascript)");
;
const pushDevSchema = async (adapter)=>{
    const { pushSchema } = adapter.requireDrizzleKit();
    // This will prompt if clarifications are needed for Drizzle to push new schema
    const { apply, hasDataLoss, warnings } = await pushSchema(adapter.schema, adapter.drizzle, adapter.schemaName ? [
        adapter.schemaName
    ] : undefined);
    if (warnings.length) {
        let message = `Warnings detected during schema push: \n\n${warnings.join('\n')}\n\n`;
        if (hasDataLoss) {
            message += `DATA LOSS WARNING: Possible data loss detected if schema is pushed.\n\n`;
        }
        message += `Accept warnings and push schema to database?`;
        const { confirm: acceptWarnings } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            name: 'confirm',
            type: 'confirm',
            initial: false,
            message
        }, {
            onCancel: ()=>{
                process.exit(0);
            }
        });
        // Exit if user does not accept warnings.
        // Q: Is this the right type of exit for this interaction?
        if (!acceptWarnings) {
            process.exit(0);
        }
    }
    await apply();
    const migrationsTable = adapter.schemaName ? `"${adapter.schemaName}"."payload_migrations"` : '"payload_migrations"';
    const result = await adapter.execute({
        drizzle: adapter.drizzle,
        raw: `SELECT * FROM ${migrationsTable} WHERE batch = '-1'`
    });
    const devPush = result.rows;
    if (!devPush.length) {
        await adapter.execute({
            drizzle: adapter.drizzle,
            raw: `INSERT INTO ${migrationsTable} (name, batch) VALUES ('dev', '-1')`
        });
    } else {
        await adapter.execute({
            drizzle: adapter.drizzle,
            raw: `UPDATE ${migrationsTable} SET updated_at = CURRENT_TIMESTAMP WHERE batch = '-1'`
        });
    }
}; //# sourceMappingURL=pushDevSchema.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/validateExistingBlockIsIdentical.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "validateExistingBlockIsIdentical": (()=>validateExistingBlockIsIdentical)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/InvalidConfiguration.js [app-rsc] (ecmascript)");
;
;
const getFlattenedFieldNames = (fields, prefix = '')=>{
    return fields.reduce((fieldsToUse, field)=>{
        let fieldPrefix = prefix;
        if ([
            'array',
            'blocks',
            'relationship',
            'upload'
        ].includes(field.type) || 'hasMany' in field && field.hasMany === true) {
            return fieldsToUse;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field)) {
            fieldPrefix = 'name' in field ? `${prefix}${field.name}_` : prefix;
            return [
                ...fieldsToUse,
                ...getFlattenedFieldNames(field.fields, fieldPrefix)
            ];
        }
        if (field.type === 'tabs') {
            return [
                ...fieldsToUse,
                ...field.tabs.reduce((tabFields, tab)=>{
                    fieldPrefix = 'name' in tab ? `${prefix}_${tab.name}` : prefix;
                    return [
                        ...tabFields,
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? [
                            {
                                ...tab,
                                type: 'tab'
                            }
                        ] : getFlattenedFieldNames(tab.fields, fieldPrefix)
                    ];
                }, [])
            ];
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            return [
                ...fieldsToUse,
                {
                    name: `${fieldPrefix}${field.name}`,
                    localized: field.localized
                }
            ];
        }
        return fieldsToUse;
    }, []);
};
const validateExistingBlockIsIdentical = ({ block, localized, rootTableName, table, tableLocales })=>{
    const fieldNames = getFlattenedFieldNames(block.fields);
    const missingField = fieldNames.find(({ name, localized })=>{
        const fieldTable = localized && tableLocales ? tableLocales : table;
        return Object.keys(fieldTable).indexOf(name) === -1;
    }) || // ensure every table column is matched for every field from the config
    Object.keys(table).find((fieldName)=>{
        if (![
            '_locale',
            '_order',
            '_parentID',
            '_path',
            '_uuid'
        ].includes(fieldName)) {
            return fieldNames.findIndex((field)=>field.name) === -1;
        }
    });
    if (missingField) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidConfiguration"](`The table ${rootTableName} has multiple blocks with slug ${block.slug}, but the schemas do not match. One block includes the field ${typeof missingField === 'string' ? missingField : missingField.name}, while the other block does not.`);
    }
    if (Boolean(localized) !== Boolean(table._locale)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidConfiguration"](`The table ${rootTableName} has multiple blocks with slug ${block.slug}, but the schemas do not match. One is localized, but another is not. Block schemas of the same name must match exactly.`);
    }
}; //# sourceMappingURL=validateExistingBlockIsIdentical.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$count$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/count.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$create$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/create.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createGlobal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createGlobalVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createGlobalVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createTableName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteMany$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/deleteMany.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/deleteOne.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$deleteVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/deleteVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$destroy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/destroy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/chainMethods.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findGlobal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findGlobalVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findGlobalVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findMigrationDir$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findMigrationDir.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findOne$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findOne.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$findVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/findVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateDown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateDown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateFresh$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateFresh.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateRefresh$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateRefresh.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateReset$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateReset.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$migrateStatus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/migrateStatus.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queries$2f$operatorMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queries/operatorMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$queryDrafts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/queryDrafts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$beginTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transactions/beginTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$commitTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transactions/commitTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$transactions$2f$rollbackTransaction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/transactions/rollbackTransaction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$update$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/update.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/updateGlobal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateGlobalVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/updateGlobalVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$updateVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/updateVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$upsertRow$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/upsertRow/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildIndexName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/buildIndexName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$executeSchemaHooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/executeSchemaHooks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$extendDrizzleTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/extendDrizzleTable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$hasLocalesTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/hasLocalesTable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$pushDevSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/pushDevSchema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$validateExistingBlockIsIdentical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/validateExistingBlockIsIdentical.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/countDistinct.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "countDistinct": (()=>countDistinct)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/find/chainMethods.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/functions/aggregate.js [app-rsc] (ecmascript)");
;
;
const countDistinct = async function countDistinct({ db, joins, tableName, where }) {
    const chainedMethods = [];
    joins.forEach(({ condition, table })=>{
        chainedMethods.push({
            args: [
                table,
                condition
            ],
            method: 'leftJoin'
        });
    });
    const countResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$find$2f$chainMethods$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["chainMethods"])({
        methods: chainedMethods,
        query: db.select({
            count: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$functions$2f$aggregate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["count"])()
        }).from(this.tables[tableName]).where(where)
    });
    return Number(countResult[0].count);
}; //# sourceMappingURL=countDistinct.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createDatabase.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createDatabase": (()=>createDatabase)
});
const setConnectionStringDatabase = ({ connectionString, database })=>{
    const connectionURL = new URL(connectionString);
    const newConnectionURL = new URL(connectionURL);
    newConnectionURL.pathname = `/${database}`;
    return newConnectionURL.toString();
};
const createDatabase = async function(args = {}) {
    // DATABASE_URL - default Vercel env
    const connectionString = this.poolOptions?.connectionString ?? process.env.DATABASE_URL;
    let managementClientConfig = {};
    let dbName = args.name;
    const schemaName = this.schemaName || 'public';
    if (connectionString) {
        if (!dbName) {
            dbName = new URL(connectionString).pathname.slice(1);
        }
        managementClientConfig.connectionString = setConnectionStringDatabase({
            connectionString,
            database: 'postgres'
        });
    } else {
        if (!dbName) {
            dbName = this.poolOptions.database;
        }
        managementClientConfig = {
            ...this.poolOptions,
            database: 'postgres'
        };
    }
    // import pg only when createDatabase is used
    const pg = await __turbopack_require__("[externals]/ [external] (pg, cjs, async loader)")(__turbopack_import__).then((mod)=>mod.default);
    const managementClient = new pg.Client(managementClientConfig);
    try {
        await managementClient.connect();
        await managementClient.query(`CREATE DATABASE ${dbName}`);
        this.payload.logger.info(`Created database "${dbName}"`);
        if (schemaName !== 'public') {
            let createdDatabaseConfig = {};
            if (connectionString) {
                createdDatabaseConfig.connectionString = setConnectionStringDatabase({
                    connectionString,
                    database: dbName
                });
            } else {
                createdDatabaseConfig = {
                    ...this.poolOptions,
                    database: dbName
                };
            }
            const createdDatabaseClient = new pg.Client(createdDatabaseConfig);
            try {
                await createdDatabaseClient.connect();
                await createdDatabaseClient.query(`CREATE SCHEMA ${schemaName}`);
                this.payload.logger.info(`Created schema "${dbName}.${schemaName}"`);
            } catch (err) {
                this.payload.logger.error({
                    err,
                    msg: `Error: failed to create schema "${dbName}.${schemaName}". Details: ${err.message}`
                });
            } finally{
                await createdDatabaseClient.end();
            }
        }
        return true;
    } catch (err) {
        this.payload.logger.error({
            err,
            msg: `Error: failed to create database ${dbName}. Details: ${err.message}`
        });
        return false;
    } finally{
        await managementClient.end();
    }
}; //# sourceMappingURL=createDatabase.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/formatJSONPathSegment.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "formatJSONPathSegment": (()=>formatJSONPathSegment)
});
const formatJSONPathSegment = (segment)=>{
    return Number.isNaN(parseInt(segment)) ? `'${segment}'` : segment;
}; //# sourceMappingURL=formatJSONPathSegment.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/convertPathToJSONTraversal.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "convertPathToJSONTraversal": (()=>convertPathToJSONTraversal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$formatJSONPathSegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/formatJSONPathSegment.js [app-rsc] (ecmascript)");
;
const convertPathToJSONTraversal = (incomingSegments)=>{
    const segments = [
        ...incomingSegments
    ];
    segments.shift();
    return segments.reduce((res, segment, i)=>{
        const formattedSegment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$formatJSONPathSegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJSONPathSegment"])(segment);
        if (i + 1 === segments.length) {
            return `${res}->>${formattedSegment}`;
        }
        return `${res}->${formattedSegment}`;
    }, '');
}; //# sourceMappingURL=convertPathToJSONTraversal.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createJSONQuery": (()=>createJSONQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$convertPathToJSONTraversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/convertPathToJSONTraversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$formatJSONPathSegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/formatJSONPathSegment.js [app-rsc] (ecmascript)");
;
;
const operatorMap = {
    contains: '~*',
    equals: '=',
    like: '~*'
};
const fromArray = ({ isRoot, operator, pathSegments, treatAsArray, value })=>{
    const newPathSegments = pathSegments.slice(isRoot ? 1 : 2);
    const alias = `${pathSegments[isRoot ? 0 : 1]}_alias_${newPathSegments.length}`;
    newPathSegments.unshift(alias);
    const arrayElements = isRoot ? pathSegments[0] : `${pathSegments[0]} -> ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$formatJSONPathSegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatJSONPathSegment"])(pathSegments[1])}`;
    return `EXISTS (
    SELECT 1
    FROM jsonb_array_elements(${arrayElements}) AS ${alias}
    WHERE ${createJSONQuery({
        operator,
        pathSegments: newPathSegments,
        treatAsArray,
        value
    })}
  )`;
};
const createConstraint = ({ operator, pathSegments, value })=>{
    const jsonQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$convertPathToJSONTraversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertPathToJSONTraversal"])(pathSegments);
    return `${pathSegments[0]}${jsonQuery} ${operatorMap[operator]} '${value}'`;
};
const createJSONQuery = ({ operator, pathSegments, treatAsArray, treatRootAsArray, value })=>{
    if (treatRootAsArray) {
        return fromArray({
            isRoot: true,
            operator,
            pathSegments,
            treatAsArray,
            value
        });
    }
    if (treatAsArray.includes(pathSegments[1])) {
        return fromArray({
            operator,
            pathSegments,
            treatAsArray,
            value
        });
    }
    return createConstraint({
        operator,
        pathSegments,
        treatAsArray,
        value
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/defaultSnapshot.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultDrizzleSnapshot": (()=>defaultDrizzleSnapshot)
});
const defaultDrizzleSnapshot = {
    id: '00000000-0000-0000-0000-000000000000',
    _meta: {
        columns: {},
        schemas: {},
        tables: {}
    },
    dialect: 'postgresql',
    enums: {},
    prevId: '00000000-0000-0000-0000-00000000000',
    schemas: {},
    sequences: {},
    tables: {},
    version: '7',
    views: {}
}; //# sourceMappingURL=defaultSnapshot.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/getMigrationTemplate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getMigrationTemplate": (()=>getMigrationTemplate),
    "indent": (()=>indent)
});
const indent = (text)=>text.split('\n').map((line)=>`  ${line}`).join('\n');
const getMigrationTemplate = ({ downSQL, imports, packageName, upSQL })=>`import { MigrateUpArgs, MigrateDownArgs, sql } from '${packageName}'
${imports ? `${imports}\n` : ''}
export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
${indent(upSQL)}
}

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
${indent(downSQL)}
}
`; //# sourceMappingURL=getMigrationTemplate.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createMigration.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createMigration": (()=>createMigration)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (module, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/prompts/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/defaultSnapshot.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$getMigrationTemplate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/getMigrationTemplate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getPredefinedMigration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/getPredefinedMigration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$writeMigrationIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/database/migrations/writeMigrationIndex.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createMigration.js")}`;
    }
};
;
;
;
;
;
;
;
;
const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
const createMigration = async function createMigration({ file, forceAcceptWarning, migrationName, payload }) {
    const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
    const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
    const dir = payload.db.migrationDir;
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dir);
    }
    const { generateDrizzleJson, generateMigration, upPgSnapshot } = require('drizzle-kit/api');
    const drizzleJsonAfter = generateDrizzleJson(this.schema);
    const [yyymmdd, hhmmss] = new Date().toISOString().split('T');
    const formattedDate = yyymmdd.replace(/\D/g, '');
    const formattedTime = hhmmss.split('.')[0].replace(/\D/g, '');
    let imports = '';
    let downSQL;
    let upSQL;
    ({ downSQL, imports, upSQL } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getPredefinedMigration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPredefinedMigration"])({
        dirname,
        file,
        migrationName,
        payload
    }));
    const timestamp = `${formattedDate}_${formattedTime}`;
    const name = migrationName || file?.split('/').slice(2).join('/');
    const fileName = `${timestamp}${name ? `_${name.replace(/\W/g, '_')}` : ''}`;
    const filePath = `${dir}/${fileName}`;
    let drizzleJsonBefore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultDrizzleSnapshot"];
    if (this.schemaName) {
        drizzleJsonBefore.schemas = {
            [this.schemaName]: this.schemaName
        };
    }
    if (!upSQL) {
        // Get latest migration snapshot
        const latestSnapshot = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dir).filter((file)=>file.endsWith('.json')).sort().reverse()?.[0];
        if (latestSnapshot) {
            drizzleJsonBefore = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(`${dir}/${latestSnapshot}`, 'utf8'));
            if (drizzleJsonBefore.version < drizzleJsonAfter.version) {
                drizzleJsonBefore = upPgSnapshot(drizzleJsonBefore);
            }
        }
        const sqlStatementsUp = await generateMigration(drizzleJsonBefore, drizzleJsonAfter);
        const sqlStatementsDown = await generateMigration(drizzleJsonAfter, drizzleJsonBefore);
        const sqlExecute = 'await payload.db.drizzle.execute(sql`';
        if (sqlStatementsUp?.length) {
            upSQL = `${sqlExecute}\n ${sqlStatementsUp?.join('\n')}\`)`;
        }
        if (sqlStatementsDown?.length) {
            downSQL = `${sqlExecute}\n ${sqlStatementsDown?.join('\n')}\`)`;
        }
        if (!upSQL?.length && !downSQL?.length && !forceAcceptWarning) {
            const { confirm: shouldCreateBlankMigration } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$prompts$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
                name: 'confirm',
                type: 'confirm',
                initial: false,
                message: 'No schema changes detected. Would you like to create a blank migration file?'
            }, {
                onCancel: ()=>{
                    process.exit(0);
                }
            });
            if (!shouldCreateBlankMigration) {
                process.exit(0);
            }
        }
        // write schema
        __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(`${filePath}.json`, JSON.stringify(drizzleJsonAfter, null, 2));
    }
    // write migration
    __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(`${filePath}.ts`, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$getMigrationTemplate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMigrationTemplate"])({
        downSQL: downSQL || `  // Migration code`,
        imports,
        packageName: payload.db.packageName,
        upSQL: upSQL || `  // Migration code`
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$writeMigrationIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["writeMigrationIndex"])({
        migrationsDir: payload.db.migrationDir
    });
    payload.logger.info({
        msg: `Migration created at ${filePath}.ts`
    });
}; //# sourceMappingURL=createMigration.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/deleteWhere.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteWhere": (()=>deleteWhere)
});
const deleteWhere = async function deleteWhere({ db, tableName, where }) {
    const table = this.tables[tableName];
    await db.delete(table).where(where);
}; //# sourceMappingURL=deleteWhere.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/dropDatabase.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "dropDatabase": (()=>dropDatabase)
});
const dropDatabase = async function dropDatabase({ adapter }) {
    await adapter.execute({
        drizzle: adapter.drizzle,
        raw: `drop schema if exists ${this.schemaName || 'public'} cascade;
    create schema ${this.schemaName || 'public'};`
    });
}; //# sourceMappingURL=dropDatabase.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/execute.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "execute": (()=>execute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/sql/sql.js [app-rsc] (ecmascript)");
;
const execute = function execute({ db, drizzle, raw, sql: statement }) {
    const executeFrom = db ?? drizzle;
    if (raw) {
        return executeFrom.execute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"].raw(raw));
    } else {
        return executeFrom.execute(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$sql$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sql"]`${statement}`);
    }
}; //# sourceMappingURL=execute.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/createIndex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createIndex": (()=>createIndex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/indexes.js [app-rsc] (ecmascript)");
;
const createIndex = ({ name, indexName, unique })=>{
    return (table)=>{
        let columns;
        if (Array.isArray(name)) {
            columns = name.map((columnName)=>table[columnName]) // exclude fields were included in compound indexes but do not exist on the table
            .filter((col)=>typeof col !== 'undefined');
        } else {
            columns = [
                table[name]
            ];
        }
        if (unique) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueIndex"])(indexName).on(columns[0], ...columns.slice(1));
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(indexName).on(columns[0], ...columns.slice(1));
    };
}; //# sourceMappingURL=createIndex.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/parentIDColumnMap.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "parentIDColumnMap": (()=>parentIDColumnMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-rsc] (ecmascript)");
;
const parentIDColumnMap = {
    integer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"],
    numeric: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numeric"],
    uuid: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"],
    varchar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"]
}; //# sourceMappingURL=parentIDColumnMap.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/setColumnID.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "setColumnID": (()=>setColumnID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/serial.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
;
;
;
const setColumnID = ({ adapter, columns, fields })=>{
    const idField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(fields).find((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === 'id');
    if (idField) {
        if (idField.type === 'number') {
            columns.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numeric"])('id').primaryKey();
            return 'numeric';
        }
        if (idField.type === 'text') {
            columns.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('id').primaryKey();
            return 'varchar';
        }
    }
    if (adapter.idType === 'uuid') {
        columns.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uuid"])('id').defaultRandom().primaryKey();
        return 'uuid';
    }
    columns.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey();
    return 'integer';
}; //# sourceMappingURL=setColumnID.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/idToUUID.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "idToUUID": (()=>idToUUID)
});
const idToUUID = (fields)=>fields.map((field)=>{
        if ('name' in field && field.name === 'id') {
            return {
                ...field,
                name: '_uuid'
            };
        }
        return field;
    }); //# sourceMappingURL=idToUUID.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/withDefault.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "withDefault": (()=>withDefault)
});
const withDefault = (column, field)=>{
    if (typeof field.defaultValue === 'undefined' || typeof field.defaultValue === 'function') {
        return column;
    }
    if (typeof field.defaultValue === 'string' && field.defaultValue.includes("'")) {
        const escapedString = field.defaultValue.replaceAll("'", "''");
        return column.default(escapedString);
    }
    return column.default(field.defaultValue);
}; //# sourceMappingURL=withDefault.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createTableName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildIndexName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/buildIndexName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$hasLocalesTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/hasLocalesTable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$validateExistingBlockIsIdentical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/validateExistingBlockIsIdentical.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/build.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$createIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/createIndex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$idToUUID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/idToUUID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/parentIDColumnMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/withDefault.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/uuid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/errors/InvalidConfiguration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/jsonb.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/indexes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/foreign-keys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/relations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/text.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const traverseFields = ({ adapter, columnPrefix, columns, disableNotNull, disableRelsTableUnique, disableUnique = false, fieldPrefix, fields, forceLocalized, indexes, localesColumns, localesIndexes, newTableName, parentTableName, relationships, relationsToBuild, rootRelationsToBuild, rootTableIDColType, rootTableName, uniqueRelationships, versions, withinLocalizedArrayOrBlock })=>{
    const throwValidationError = true;
    let hasLocalizedField = false;
    let hasLocalizedRelationshipField = false;
    let hasManyTextField = false;
    let hasLocalizedManyTextField = false;
    let hasManyNumberField = false;
    let hasLocalizedManyNumberField = false;
    let parentIDColType = 'integer';
    if (columns.id instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$uuid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PgUUIDBuilder"]) {
        parentIDColType = 'uuid';
    }
    if (columns.id instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PgNumericBuilder"]) {
        parentIDColType = 'numeric';
    }
    if (columns.id instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PgVarcharBuilder"]) {
        parentIDColType = 'varchar';
    }
    fields.forEach((field)=>{
        if ('name' in field && field.name === 'id') {
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsVirtual"])(field)) {
            return;
        }
        let columnName;
        let fieldName;
        let targetTable = columns;
        let targetIndexes = indexes;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            columnName = `${columnPrefix || ''}${field.name[0] === '_' ? '_' : ''}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.name)}`;
            fieldName = `${fieldPrefix?.replace('.', '_') || ''}${field.name}`;
            // If field is localized,
            // add the column to the locale table instead of main table
            if (adapter.payload.config.localization && (field.localized || forceLocalized) && field.type !== 'array' && field.type !== 'blocks' && ('hasMany' in field && field.hasMany !== true || !('hasMany' in field))) {
                hasLocalizedField = true;
                targetTable = localesColumns;
                targetIndexes = localesIndexes;
            }
            if ((field.unique || field.index || [
                'relationship',
                'upload'
            ].includes(field.type)) && ![
                'array',
                'blocks',
                'group',
                'point'
            ].includes(field.type) && !('hasMany' in field && field.hasMany === true) && !('relationTo' in field && Array.isArray(field.relationTo))) {
                const unique = disableUnique !== true && field.unique;
                if (unique) {
                    const constraintValue = `${fieldPrefix || ''}${field.name}`;
                    if (!adapter.fieldConstraints?.[rootTableName]) {
                        adapter.fieldConstraints[rootTableName] = {};
                    }
                    adapter.fieldConstraints[rootTableName][`${columnName}_idx`] = constraintValue;
                }
                const indexName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildIndexName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildIndexName"])({
                    name: `${newTableName}_${columnName}`,
                    adapter
                });
                targetIndexes[indexName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$createIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIndex"])({
                    name: field.localized ? [
                        fieldName,
                        '_locale'
                    ] : fieldName,
                    indexName,
                    unique
                });
            }
        }
        switch(field.type){
            case 'text':
                {
                    if (field.hasMany) {
                        const isLocalized = Boolean(field.localized && adapter.payload.config.localization) || withinLocalizedArrayOrBlock || forceLocalized;
                        if (isLocalized) {
                            hasLocalizedManyTextField = true;
                        }
                        if (field.index) {
                            hasManyTextField = 'index';
                        } else if (!hasManyTextField) {
                            hasManyTextField = true;
                        }
                        if (field.unique) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidConfiguration"]('Unique is not supported in Postgres for hasMany text fields.');
                        }
                    } else {
                        targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])(columnName), field);
                    }
                    break;
                }
            case 'email':
            case 'code':
            case 'textarea':
                {
                    targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])(columnName), field);
                    break;
                }
            case 'number':
                {
                    if (field.hasMany) {
                        const isLocalized = Boolean(field.localized && adapter.payload.config.localization) || withinLocalizedArrayOrBlock || forceLocalized;
                        if (isLocalized) {
                            hasLocalizedManyNumberField = true;
                        }
                        if (field.index) {
                            hasManyNumberField = 'index';
                        } else if (!hasManyNumberField) {
                            hasManyNumberField = true;
                        }
                        if (field.unique) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidConfiguration"]('Unique is not supported in Postgres for hasMany number fields.');
                        }
                    } else {
                        targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numeric"])(columnName), field);
                    }
                    break;
                }
            case 'richText':
            case 'json':
                {
                    targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$jsonb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsonb"])(columnName), field);
                    break;
                }
            case 'date':
                {
                    targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])(columnName, {
                        mode: 'string',
                        precision: 3,
                        withTimezone: true
                    }), field);
                    break;
                }
            case 'point':
                {
                    break;
                }
            case 'radio':
            case 'select':
                {
                    const enumName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                        adapter,
                        config: field,
                        parentTableName: newTableName,
                        prefix: `enum_${newTableName}_`,
                        target: 'enumName',
                        throwValidationError
                    });
                    adapter.enums[enumName] = adapter.pgSchema.enum(enumName, field.options.map((option)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["optionIsObject"])(option)) {
                            return option.value;
                        }
                        return option;
                    }));
                    if (field.type === 'select' && field.hasMany) {
                        const selectTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                            adapter,
                            config: field,
                            parentTableName: newTableName,
                            prefix: `${newTableName}_`,
                            throwValidationError,
                            versionsCustomName: versions
                        });
                        const baseColumns = {
                            order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('order').notNull(),
                            parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][parentIDColType]('parent_id').notNull(),
                            value: adapter.enums[enumName]('value')
                        };
                        const baseExtraConfig = {
                            orderIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${selectTableName}_order_idx`).on(cols.order),
                            parentFk: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                                    name: `${selectTableName}_parent_fk`,
                                    columns: [
                                        cols.parent
                                    ],
                                    foreignColumns: [
                                        adapter.tables[parentTableName].id
                                    ]
                                }).onDelete('cascade'),
                            parentIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${selectTableName}_parent_idx`).on(cols.parent)
                        };
                        const isLocalized = Boolean(field.localized && adapter.payload.config.localization) || withinLocalizedArrayOrBlock || forceLocalized;
                        if (isLocalized) {
                            baseColumns.locale = adapter.enums.enum__locales('locale').notNull();
                            baseExtraConfig.localeIdx = (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${selectTableName}_locale_idx`).on(cols.locale);
                        }
                        if (field.index) {
                            baseExtraConfig.value = (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${selectTableName}_value_idx`).on(cols.value);
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
                            adapter,
                            baseColumns,
                            baseExtraConfig,
                            disableNotNull,
                            disableUnique,
                            fields: [],
                            rootTableName,
                            tableName: selectTableName,
                            versions
                        });
                        relationsToBuild.set(fieldName, {
                            type: 'many',
                            // selects have their own localized table, independent of the base table.
                            localized: false,
                            target: selectTableName
                        });
                        adapter.relations[`relations_${selectTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(adapter.tables[selectTableName], ({ one })=>({
                                parent: one(adapter.tables[parentTableName], {
                                    fields: [
                                        adapter.tables[selectTableName].parent
                                    ],
                                    references: [
                                        adapter.tables[parentTableName].id
                                    ],
                                    relationName: fieldName
                                })
                            }));
                    } else {
                        targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])(adapter.enums[enumName](columnName), field);
                    }
                    break;
                }
            case 'checkbox':
                {
                    targetTable[fieldName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$withDefault$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withDefault"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["boolean"])(columnName), field);
                    break;
                }
            case 'array':
                {
                    const disableNotNullFromHere = Boolean(field.admin?.condition) || disableNotNull;
                    const arrayTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                        adapter,
                        config: field,
                        parentTableName: newTableName,
                        prefix: `${newTableName}_`,
                        throwValidationError,
                        versionsCustomName: versions
                    });
                    const baseColumns = {
                        _order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('_order').notNull(),
                        _parentID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][parentIDColType]('_parent_id').notNull()
                    };
                    const baseExtraConfig = {
                        _orderIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${arrayTableName}_order_idx`).on(cols._order),
                        _parentIDFk: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                                name: `${arrayTableName}_parent_id_fk`,
                                columns: [
                                    cols['_parentID']
                                ],
                                foreignColumns: [
                                    adapter.tables[parentTableName].id
                                ]
                            }).onDelete('cascade'),
                        _parentIDIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${arrayTableName}_parent_id_idx`).on(cols._parentID)
                    };
                    const isLocalized = Boolean(field.localized && adapter.payload.config.localization) || withinLocalizedArrayOrBlock || forceLocalized;
                    if (isLocalized) {
                        baseColumns._locale = adapter.enums.enum__locales('_locale').notNull();
                        baseExtraConfig._localeIdx = (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${arrayTableName}_locale_idx`).on(cols._locale);
                    }
                    const { hasLocalizedManyNumberField: subHasLocalizedManyNumberField, hasLocalizedManyTextField: subHasLocalizedManyTextField, hasLocalizedRelationshipField: subHasLocalizedRelationshipField, hasManyNumberField: subHasManyNumberField, hasManyTextField: subHasManyTextField, relationsToBuild: subRelationsToBuild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
                        adapter,
                        baseColumns,
                        baseExtraConfig,
                        disableNotNull: disableNotNullFromHere,
                        disableRelsTableUnique: true,
                        disableUnique,
                        fields: disableUnique ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$idToUUID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idToUUID"])(field.fields) : field.fields,
                        rootRelationships: relationships,
                        rootRelationsToBuild,
                        rootTableIDColType,
                        rootTableName,
                        rootUniqueRelationships: uniqueRelationships,
                        tableName: arrayTableName,
                        versions,
                        withinLocalizedArrayOrBlock: isLocalized
                    });
                    if (subHasLocalizedManyNumberField) {
                        hasLocalizedManyNumberField = subHasLocalizedManyNumberField;
                    }
                    if (subHasLocalizedRelationshipField) {
                        hasLocalizedRelationshipField = subHasLocalizedRelationshipField;
                    }
                    if (subHasLocalizedManyTextField) {
                        hasLocalizedManyTextField = subHasLocalizedManyTextField;
                    }
                    if (subHasManyTextField) {
                        if (!hasManyTextField || subHasManyTextField === 'index') {
                            hasManyTextField = subHasManyTextField;
                        }
                    }
                    if (subHasManyNumberField) {
                        if (!hasManyNumberField || subHasManyNumberField === 'index') {
                            hasManyNumberField = subHasManyNumberField;
                        }
                    }
                    relationsToBuild.set(fieldName, {
                        type: 'many',
                        // arrays have their own localized table, independent of the base table.
                        localized: false,
                        target: arrayTableName
                    });
                    adapter.relations[`relations_${arrayTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(adapter.tables[arrayTableName], ({ many, one })=>{
                        const result = {
                            _parentID: one(adapter.tables[parentTableName], {
                                fields: [
                                    adapter.tables[arrayTableName]._parentID
                                ],
                                references: [
                                    adapter.tables[parentTableName].id
                                ],
                                relationName: fieldName
                            })
                        };
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$hasLocalesTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocalesTable"])(field.fields)) {
                            result._locales = many(adapter.tables[`${arrayTableName}${adapter.localesSuffix}`], {
                                relationName: '_locales'
                            });
                        }
                        subRelationsToBuild.forEach(({ type, localized, target }, key)=>{
                            if (type === 'one') {
                                const arrayWithLocalized = localized ? `${arrayTableName}${adapter.localesSuffix}` : arrayTableName;
                                result[key] = one(adapter.tables[target], {
                                    fields: [
                                        adapter.tables[arrayWithLocalized][key]
                                    ],
                                    references: [
                                        adapter.tables[target].id
                                    ],
                                    relationName: key
                                });
                            }
                            if (type === 'many') {
                                result[key] = many(adapter.tables[target], {
                                    relationName: key
                                });
                            }
                        });
                        return result;
                    });
                    break;
                }
            case 'blocks':
                {
                    const disableNotNullFromHere = Boolean(field.admin?.condition) || disableNotNull;
                    field.blocks.forEach((block)=>{
                        const blockTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                            adapter,
                            config: block,
                            parentTableName: rootTableName,
                            prefix: `${rootTableName}_blocks_`,
                            throwValidationError,
                            versionsCustomName: versions
                        });
                        if (!adapter.tables[blockTableName]) {
                            const baseColumns = {
                                _order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('_order').notNull(),
                                _parentID: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][rootTableIDColType]('_parent_id').notNull(),
                                _path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["text"])('_path').notNull()
                            };
                            const baseExtraConfig = {
                                _orderIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${blockTableName}_order_idx`).on(cols._order),
                                _parentIdFk: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                                        name: `${blockTableName}_parent_id_fk`,
                                        columns: [
                                            cols._parentID
                                        ],
                                        foreignColumns: [
                                            adapter.tables[rootTableName].id
                                        ]
                                    }).onDelete('cascade'),
                                _parentIDIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${blockTableName}_parent_id_idx`).on(cols._parentID),
                                _pathIdx: (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${blockTableName}_path_idx`).on(cols._path)
                            };
                            const isLocalized = Boolean(field.localized && adapter.payload.config.localization) || withinLocalizedArrayOrBlock || forceLocalized;
                            if (isLocalized) {
                                baseColumns._locale = adapter.enums.enum__locales('_locale').notNull();
                                baseExtraConfig._localeIdx = (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${blockTableName}_locale_idx`).on(cols._locale);
                            }
                            const { hasLocalizedManyNumberField: subHasLocalizedManyNumberField, hasLocalizedManyTextField: subHasLocalizedManyTextField, hasLocalizedRelationshipField: subHasLocalizedRelationshipField, hasManyNumberField: subHasManyNumberField, hasManyTextField: subHasManyTextField, relationsToBuild: subRelationsToBuild } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
                                adapter,
                                baseColumns,
                                baseExtraConfig,
                                disableNotNull: disableNotNullFromHere,
                                disableRelsTableUnique: true,
                                disableUnique,
                                fields: disableUnique ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$idToUUID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["idToUUID"])(block.fields) : block.fields,
                                rootRelationships: relationships,
                                rootRelationsToBuild,
                                rootTableIDColType,
                                rootTableName,
                                rootUniqueRelationships: uniqueRelationships,
                                tableName: blockTableName,
                                versions,
                                withinLocalizedArrayOrBlock: isLocalized
                            });
                            if (subHasLocalizedManyNumberField) {
                                hasLocalizedManyNumberField = subHasLocalizedManyNumberField;
                            }
                            if (subHasLocalizedRelationshipField) {
                                hasLocalizedRelationshipField = subHasLocalizedRelationshipField;
                            }
                            if (subHasLocalizedManyTextField) {
                                hasLocalizedManyTextField = subHasLocalizedManyTextField;
                            }
                            if (subHasManyTextField) {
                                if (!hasManyTextField || subHasManyTextField === 'index') {
                                    hasManyTextField = subHasManyTextField;
                                }
                            }
                            if (subHasManyNumberField) {
                                if (!hasManyNumberField || subHasManyNumberField === 'index') {
                                    hasManyNumberField = subHasManyNumberField;
                                }
                            }
                            adapter.relations[`relations_${blockTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(adapter.tables[blockTableName], ({ many, one })=>{
                                const result = {
                                    _parentID: one(adapter.tables[rootTableName], {
                                        fields: [
                                            adapter.tables[blockTableName]._parentID
                                        ],
                                        references: [
                                            adapter.tables[rootTableName].id
                                        ],
                                        relationName: `_blocks_${block.slug}`
                                    })
                                };
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$hasLocalesTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasLocalesTable"])(block.fields)) {
                                    result._locales = many(adapter.tables[`${blockTableName}${adapter.localesSuffix}`], {
                                        relationName: '_locales'
                                    });
                                }
                                subRelationsToBuild.forEach(({ type, localized, target }, key)=>{
                                    if (type === 'one') {
                                        const blockWithLocalized = localized ? `${blockTableName}${adapter.localesSuffix}` : blockTableName;
                                        result[key] = one(adapter.tables[target], {
                                            fields: [
                                                adapter.tables[blockWithLocalized][key]
                                            ],
                                            references: [
                                                adapter.tables[target].id
                                            ],
                                            relationName: key
                                        });
                                    }
                                    if (type === 'many') {
                                        result[key] = many(adapter.tables[target], {
                                            relationName: key
                                        });
                                    }
                                });
                                return result;
                            });
                        } else if (("TURBOPACK compile-time value", "development") !== 'production' && !versions) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$validateExistingBlockIsIdentical$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateExistingBlockIsIdentical"])({
                                block,
                                localized: field.localized,
                                rootTableName,
                                table: adapter.tables[blockTableName],
                                tableLocales: adapter.tables[`${blockTableName}${adapter.localesSuffix}`]
                            });
                        }
                        // blocks relationships are defined from the collection or globals table down to the block, bypassing any subBlocks
                        rootRelationsToBuild.set(`_blocks_${block.slug}`, {
                            type: 'many',
                            // blocks are not localized on the parent table
                            localized: false,
                            target: blockTableName
                        });
                    });
                    break;
                }
            case 'tab':
            case 'group':
                {
                    if (!('name' in field)) {
                        const { hasLocalizedField: groupHasLocalizedField, hasLocalizedManyNumberField: groupHasLocalizedManyNumberField, hasLocalizedManyTextField: groupHasLocalizedManyTextField, hasLocalizedRelationshipField: groupHasLocalizedRelationshipField, hasManyNumberField: groupHasManyNumberField, hasManyTextField: groupHasManyTextField } = traverseFields({
                            adapter,
                            columnPrefix,
                            columns,
                            disableNotNull,
                            disableUnique,
                            fieldPrefix,
                            fields: field.fields,
                            forceLocalized,
                            indexes,
                            localesColumns,
                            localesIndexes,
                            newTableName,
                            parentTableName,
                            relationships,
                            relationsToBuild,
                            rootRelationsToBuild,
                            rootTableIDColType,
                            rootTableName,
                            uniqueRelationships,
                            versions,
                            withinLocalizedArrayOrBlock
                        });
                        if (groupHasLocalizedField) {
                            hasLocalizedField = true;
                        }
                        if (groupHasLocalizedRelationshipField) {
                            hasLocalizedRelationshipField = true;
                        }
                        if (groupHasManyTextField) {
                            hasManyTextField = true;
                        }
                        if (groupHasLocalizedManyTextField) {
                            hasLocalizedManyTextField = true;
                        }
                        if (groupHasManyNumberField) {
                            hasManyNumberField = true;
                        }
                        if (groupHasLocalizedManyNumberField) {
                            hasLocalizedManyNumberField = true;
                        }
                        break;
                    }
                    const disableNotNullFromHere = Boolean(field.admin?.condition) || disableNotNull;
                    const { hasLocalizedField: groupHasLocalizedField, hasLocalizedManyNumberField: groupHasLocalizedManyNumberField, hasLocalizedManyTextField: groupHasLocalizedManyTextField, hasLocalizedRelationshipField: groupHasLocalizedRelationshipField, hasManyNumberField: groupHasManyNumberField, hasManyTextField: groupHasManyTextField } = traverseFields({
                        adapter,
                        columnPrefix: `${columnName}_`,
                        columns,
                        disableNotNull: disableNotNullFromHere,
                        disableUnique,
                        fieldPrefix: `${fieldName}.`,
                        fields: field.fields,
                        forceLocalized: field.localized,
                        indexes,
                        localesColumns,
                        localesIndexes,
                        newTableName: `${parentTableName}_${columnName}`,
                        parentTableName,
                        relationships,
                        relationsToBuild,
                        rootRelationsToBuild,
                        rootTableIDColType,
                        rootTableName,
                        uniqueRelationships,
                        versions,
                        withinLocalizedArrayOrBlock: withinLocalizedArrayOrBlock || field.localized
                    });
                    if (groupHasLocalizedField) {
                        hasLocalizedField = true;
                    }
                    if (groupHasLocalizedRelationshipField) {
                        hasLocalizedRelationshipField = true;
                    }
                    if (groupHasManyTextField) {
                        hasManyTextField = true;
                    }
                    if (groupHasLocalizedManyTextField) {
                        hasLocalizedManyTextField = true;
                    }
                    if (groupHasManyNumberField) {
                        hasManyNumberField = true;
                    }
                    if (groupHasLocalizedManyNumberField) {
                        hasLocalizedManyNumberField = true;
                    }
                    break;
                }
            case 'tabs':
                {
                    const disableNotNullFromHere = Boolean(field.admin?.condition) || disableNotNull;
                    const { hasLocalizedField: tabHasLocalizedField, hasLocalizedManyNumberField: tabHasLocalizedManyNumberField, hasLocalizedManyTextField: tabHasLocalizedManyTextField, hasLocalizedRelationshipField: tabHasLocalizedRelationshipField, hasManyNumberField: tabHasManyNumberField, hasManyTextField: tabHasManyTextField } = traverseFields({
                        adapter,
                        columnPrefix,
                        columns,
                        disableNotNull: disableNotNullFromHere,
                        disableUnique,
                        fieldPrefix,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        forceLocalized,
                        indexes,
                        localesColumns,
                        localesIndexes,
                        newTableName,
                        parentTableName,
                        relationships,
                        relationsToBuild,
                        rootRelationsToBuild,
                        rootTableIDColType,
                        rootTableName,
                        uniqueRelationships,
                        versions,
                        withinLocalizedArrayOrBlock
                    });
                    if (tabHasLocalizedField) {
                        hasLocalizedField = true;
                    }
                    if (tabHasLocalizedRelationshipField) {
                        hasLocalizedRelationshipField = true;
                    }
                    if (tabHasManyTextField) {
                        hasManyTextField = true;
                    }
                    if (tabHasLocalizedManyTextField) {
                        hasLocalizedManyTextField = true;
                    }
                    if (tabHasManyNumberField) {
                        hasManyNumberField = true;
                    }
                    if (tabHasLocalizedManyNumberField) {
                        hasLocalizedManyNumberField = true;
                    }
                    break;
                }
            case 'row':
            case 'collapsible':
                {
                    const disableNotNullFromHere = Boolean(field.admin?.condition) || disableNotNull;
                    const { hasLocalizedField: rowHasLocalizedField, hasLocalizedManyNumberField: rowHasLocalizedManyNumberField, hasLocalizedManyTextField: rowHasLocalizedManyTextField, hasLocalizedRelationshipField: rowHasLocalizedRelationshipField, hasManyNumberField: rowHasManyNumberField, hasManyTextField: rowHasManyTextField } = traverseFields({
                        adapter,
                        columnPrefix,
                        columns,
                        disableNotNull: disableNotNullFromHere,
                        disableUnique,
                        fieldPrefix,
                        fields: field.fields,
                        forceLocalized,
                        indexes,
                        localesColumns,
                        localesIndexes,
                        newTableName,
                        parentTableName,
                        relationships,
                        relationsToBuild,
                        rootRelationsToBuild,
                        rootTableIDColType,
                        rootTableName,
                        uniqueRelationships,
                        versions,
                        withinLocalizedArrayOrBlock
                    });
                    if (rowHasLocalizedField) {
                        hasLocalizedField = true;
                    }
                    if (rowHasLocalizedRelationshipField) {
                        hasLocalizedRelationshipField = true;
                    }
                    if (rowHasManyTextField) {
                        hasManyTextField = true;
                    }
                    if (rowHasLocalizedManyTextField) {
                        hasLocalizedManyTextField = true;
                    }
                    if (rowHasManyNumberField) {
                        hasManyNumberField = true;
                    }
                    if (rowHasLocalizedManyNumberField) {
                        hasLocalizedManyNumberField = true;
                    }
                    break;
                }
            case 'relationship':
            case 'upload':
                if (Array.isArray(field.relationTo)) {
                    field.relationTo.forEach((relation)=>{
                        relationships.add(relation);
                        if (field.unique && !disableUnique && !disableRelsTableUnique) {
                            uniqueRelationships.add(relation);
                        }
                    });
                } else if (field.hasMany) {
                    relationships.add(field.relationTo);
                    if (field.unique && !disableUnique && !disableRelsTableUnique) {
                        uniqueRelationships.add(field.relationTo);
                    }
                } else {
                    // simple relationships get a column on the targetTable with a foreign key to the relationTo table
                    const relationshipConfig = adapter.payload.collections[field.relationTo].config;
                    const tableName = adapter.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(field.relationTo));
                    // get the id type of the related collection
                    let colType = adapter.idType === 'uuid' ? 'uuid' : 'integer';
                    const relatedCollectionCustomID = relationshipConfig.fields.find((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === 'id');
                    if (relatedCollectionCustomID?.type === 'number') {
                        colType = 'numeric';
                    }
                    if (relatedCollectionCustomID?.type === 'text') {
                        colType = 'varchar';
                    }
                    // make the foreign key column for relationship using the correct id column type
                    targetTable[fieldName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][colType](`${columnName}_id`).references(()=>adapter.tables[tableName].id, {
                        onDelete: 'set null'
                    });
                    // add relationship to table
                    relationsToBuild.set(fieldName, {
                        type: 'one',
                        localized: adapter.payload.config.localization && (field.localized || forceLocalized),
                        target: tableName
                    });
                    // add notNull when not required
                    if (!disableNotNull && field.required && !field.admin?.condition) {
                        targetTable[fieldName].notNull();
                    }
                    break;
                }
                if (Boolean(field.localized && adapter.payload.config.localization) || withinLocalizedArrayOrBlock) {
                    hasLocalizedRelationshipField = true;
                }
                break;
            default:
                break;
        }
        const condition = field.admin && field.admin.condition;
        if (!disableNotNull && targetTable[fieldName] && 'required' in field && field.required && !condition) {
            targetTable[fieldName].notNull();
        }
    });
    return {
        hasLocalizedField,
        hasLocalizedManyNumberField,
        hasLocalizedManyTextField,
        hasLocalizedRelationshipField,
        hasManyNumberField,
        hasManyTextField
    };
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/build.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "buildTable": (()=>buildTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createTableName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildIndexName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/buildIndexName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$createIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/createIndex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/parentIDColumnMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$setColumnID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/setColumnID.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/timestamp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/serial.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$unique$2d$constraint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/unique-constraint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/foreign-keys.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/relations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/integer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/varchar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/indexes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/columns/numeric.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const buildTable = ({ adapter, baseColumns = {}, baseExtraConfig = {}, disableNotNull, disableRelsTableUnique = false, disableUnique = false, fields, rootRelationships, rootRelationsToBuild, rootTableIDColType, rootTableName: incomingRootTableName, rootUniqueRelationships, tableName, timestamps, versions, withinLocalizedArrayOrBlock })=>{
    const isRoot = !incomingRootTableName;
    const rootTableName = incomingRootTableName || tableName;
    const columns = baseColumns;
    const indexes = {};
    const localesColumns = {};
    const localesIndexes = {};
    let localesTable;
    let textsTable;
    let numbersTable;
    // Relationships to the base collection
    const relationships = rootRelationships || new Set();
    // Unique relationships to the base collection
    const uniqueRelationships = rootUniqueRelationships || new Set();
    let relationshipsTable;
    // Drizzle relations
    const relationsToBuild = new Map();
    const idColType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$setColumnID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setColumnID"])({
        adapter,
        columns,
        fields
    });
    const { hasLocalizedField, hasLocalizedManyNumberField, hasLocalizedManyTextField, hasLocalizedRelationshipField, hasManyNumberField, hasManyTextField } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        adapter,
        columns,
        disableNotNull,
        disableRelsTableUnique,
        disableUnique,
        fields,
        indexes,
        localesColumns,
        localesIndexes,
        newTableName: tableName,
        parentTableName: tableName,
        relationships,
        relationsToBuild,
        rootRelationsToBuild: rootRelationsToBuild || relationsToBuild,
        rootTableIDColType: rootTableIDColType || idColType,
        rootTableName,
        uniqueRelationships,
        versions,
        withinLocalizedArrayOrBlock
    });
    // split the relationsToBuild by localized and non-localized
    const localizedRelations = new Map();
    const nonLocalizedRelations = new Map();
    relationsToBuild.forEach(({ type, localized, relationName, target }, key)=>{
        const map = localized ? localizedRelations : nonLocalizedRelations;
        map.set(key, {
            type,
            relationName,
            target
        });
    });
    if (timestamps) {
        columns.createdAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('created_at', {
            mode: 'string',
            precision: 3,
            withTimezone: true
        }).defaultNow().notNull();
        columns.updatedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$timestamp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timestamp"])('updated_at', {
            mode: 'string',
            precision: 3,
            withTimezone: true
        }).defaultNow().notNull();
    }
    const table = adapter.pgSchema.table(tableName, columns, (cols)=>{
        const extraConfig = Object.entries(baseExtraConfig).reduce((config, [key, func])=>{
            config[key] = func(cols);
            return config;
        }, {});
        const result = Object.entries(indexes).reduce((acc, [colName, func])=>{
            acc[colName] = func(cols);
            return acc;
        }, extraConfig);
        return result;
    });
    adapter.tables[tableName] = table;
    if (hasLocalizedField || localizedRelations.size) {
        const localeTableName = `${tableName}${adapter.localesSuffix}`;
        localesColumns.id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey();
        localesColumns._locale = adapter.enums.enum__locales('_locale').notNull();
        localesColumns._parentID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][idColType]('_parent_id').notNull();
        localesTable = adapter.pgSchema.table(localeTableName, localesColumns, (cols)=>{
            return Object.entries(localesIndexes).reduce((acc, [colName, func])=>{
                acc[colName] = func(cols);
                return acc;
            }, {
                _localeParent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$unique$2d$constraint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unique"])(`${localeTableName}_locale_parent_id_unique`).on(cols._locale, cols._parentID),
                _parentIdFk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                    name: `${localeTableName}_parent_id_fk`,
                    columns: [
                        cols._parentID
                    ],
                    foreignColumns: [
                        table.id
                    ]
                }).onDelete('cascade')
            });
        });
        adapter.tables[localeTableName] = localesTable;
        adapter.relations[`relations_${localeTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(localesTable, ({ many, one })=>{
            const result = {};
            result._parentID = one(table, {
                fields: [
                    localesTable._parentID
                ],
                references: [
                    table.id
                ],
                // name the relationship by what the many() relationName is
                relationName: '_locales'
            });
            localizedRelations.forEach(({ type, target }, key)=>{
                if (type === 'one') {
                    result[key] = one(adapter.tables[target], {
                        fields: [
                            localesTable[key]
                        ],
                        references: [
                            adapter.tables[target].id
                        ],
                        relationName: key
                    });
                }
                if (type === 'many') {
                    result[key] = many(adapter.tables[target], {
                        relationName: key
                    });
                }
            });
            return result;
        });
    }
    if (isRoot) {
        if (hasManyTextField) {
            const textsTableName = `${rootTableName}_texts`;
            const columns = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey(),
                order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('order').notNull(),
                parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][idColType]('parent_id').notNull(),
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('path').notNull(),
                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('text')
            };
            if (hasLocalizedManyTextField) {
                columns.locale = adapter.enums.enum__locales('locale');
            }
            textsTable = adapter.pgSchema.table(textsTableName, columns, (cols)=>{
                const config = {
                    orderParentIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${textsTableName}_order_parent_idx`).on(cols.order, cols.parent),
                    parentFk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                        name: `${textsTableName}_parent_fk`,
                        columns: [
                            cols.parent
                        ],
                        foreignColumns: [
                            table.id
                        ]
                    }).onDelete('cascade')
                };
                if (hasManyTextField === 'index') {
                    config.text_idx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${textsTableName}_text_idx`).on(cols.text);
                }
                if (hasLocalizedManyTextField) {
                    config.localeParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${textsTableName}_locale_parent`).on(cols.locale, cols.parent);
                }
                return config;
            });
            adapter.tables[textsTableName] = textsTable;
            adapter.relations[`relations_${textsTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(textsTable, ({ one })=>({
                    parent: one(table, {
                        fields: [
                            textsTable.parent
                        ],
                        references: [
                            table.id
                        ],
                        relationName: '_texts'
                    })
                }));
        }
        if (hasManyNumberField) {
            const numbersTableName = `${rootTableName}_numbers`;
            const columns = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey(),
                number: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$numeric$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["numeric"])('number'),
                order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('order').notNull(),
                parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][idColType]('parent_id').notNull(),
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('path').notNull()
            };
            if (hasLocalizedManyNumberField) {
                columns.locale = adapter.enums.enum__locales('locale');
            }
            numbersTable = adapter.pgSchema.table(numbersTableName, columns, (cols)=>{
                const config = {
                    orderParentIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${numbersTableName}_order_parent_idx`).on(cols.order, cols.parent),
                    parentFk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                        name: `${numbersTableName}_parent_fk`,
                        columns: [
                            cols.parent
                        ],
                        foreignColumns: [
                            table.id
                        ]
                    }).onDelete('cascade')
                };
                if (hasManyNumberField === 'index') {
                    config.numberIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${numbersTableName}_number_idx`).on(cols.number);
                }
                if (hasLocalizedManyNumberField) {
                    config.localeParent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${numbersTableName}_locale_parent`).on(cols.locale, cols.parent);
                }
                return config;
            });
            adapter.tables[numbersTableName] = numbersTable;
            adapter.relations[`relations_${numbersTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(numbersTable, ({ one })=>({
                    parent: one(table, {
                        fields: [
                            numbersTable.parent
                        ],
                        references: [
                            table.id
                        ],
                        relationName: '_numbers'
                    })
                }));
        }
        if (relationships.size) {
            const relationshipColumns = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$serial$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serial"])('id').primaryKey(),
                order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$integer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["integer"])('order'),
                parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][idColType]('parent_id').notNull(),
                path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$columns$2f$varchar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["varchar"])('path').notNull()
            };
            if (hasLocalizedRelationshipField) {
                relationshipColumns.locale = adapter.enums.enum__locales('locale');
            }
            const relationExtraConfig = {};
            const relationshipsTableName = `${tableName}${adapter.relationshipsSuffix}`;
            relationships.forEach((relationTo)=>{
                const relationshipConfig = adapter.payload.collections[relationTo].config;
                const formattedRelationTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                    adapter,
                    config: relationshipConfig,
                    throwValidationError: true
                });
                let colType = adapter.idType === 'uuid' ? 'uuid' : 'integer';
                const relatedCollectionCustomIDType = adapter.payload.collections[relationshipConfig.slug]?.customIDType;
                if (relatedCollectionCustomIDType === 'number') {
                    colType = 'numeric';
                }
                if (relatedCollectionCustomIDType === 'text') {
                    colType = 'varchar';
                }
                const colName = `${relationTo}ID`;
                relationshipColumns[colName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$parentIDColumnMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parentIDColumnMap"][colType](`${formattedRelationTo}_id`);
                relationExtraConfig[`${relationTo}IdFk`] = (cols)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                        name: `${relationshipsTableName}_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(relationTo)}_fk`,
                        columns: [
                            cols[colName]
                        ],
                        foreignColumns: [
                            adapter.tables[formattedRelationTo].id
                        ]
                    }).onDelete('cascade');
                const indexColumns = [
                    colName
                ];
                const unique = !disableUnique && uniqueRelationships.has(relationTo);
                if (unique) {
                    indexColumns.push('path');
                }
                if (hasLocalizedRelationshipField) {
                    indexColumns.push('locale');
                }
                const indexName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$buildIndexName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildIndexName"])({
                    name: `${relationshipsTableName}_${formattedRelationTo}_id`,
                    adapter
                });
                relationExtraConfig[indexName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$createIndex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIndex"])({
                    name: indexColumns,
                    indexName,
                    unique
                });
            });
            relationshipsTable = adapter.pgSchema.table(relationshipsTableName, relationshipColumns, (cols)=>{
                const result = Object.entries(relationExtraConfig).reduce((config, [key, func])=>{
                    config[key] = func(cols);
                    return config;
                }, {
                    order: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${relationshipsTableName}_order_idx`).on(cols.order),
                    parentFk: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$foreign$2d$keys$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["foreignKey"])({
                        name: `${relationshipsTableName}_parent_fk`,
                        columns: [
                            cols.parent
                        ],
                        foreignColumns: [
                            table.id
                        ]
                    }).onDelete('cascade'),
                    parentIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${relationshipsTableName}_parent_idx`).on(cols.parent),
                    pathIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${relationshipsTableName}_path_idx`).on(cols.path)
                });
                if (hasLocalizedRelationshipField) {
                    result.localeIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["index"])(`${relationshipsTableName}_locale_idx`).on(cols.locale);
                }
                return result;
            });
            adapter.tables[relationshipsTableName] = relationshipsTable;
            adapter.relations[`relations_${relationshipsTableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(relationshipsTable, ({ one })=>{
                const result = {
                    parent: one(table, {
                        fields: [
                            relationshipsTable.parent
                        ],
                        references: [
                            table.id
                        ],
                        relationName: '_rels'
                    })
                };
                relationships.forEach((relationTo)=>{
                    const relatedTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                        adapter,
                        config: adapter.payload.collections[relationTo].config,
                        throwValidationError: true
                    });
                    const idColumnName = `${relationTo}ID`;
                    result[idColumnName] = one(adapter.tables[relatedTableName], {
                        fields: [
                            relationshipsTable[idColumnName]
                        ],
                        references: [
                            adapter.tables[relatedTableName].id
                        ],
                        relationName: relationTo
                    });
                });
                return result;
            });
        }
    }
    adapter.relations[`relations_${tableName}`] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$relations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relations"])(table, ({ many, one })=>{
        const result = {};
        nonLocalizedRelations.forEach(({ type, relationName, target }, key)=>{
            if (type === 'one') {
                result[key] = one(adapter.tables[target], {
                    fields: [
                        table[key]
                    ],
                    references: [
                        adapter.tables[target].id
                    ],
                    relationName: key
                });
            }
            if (type === 'many') {
                result[key] = many(adapter.tables[target], {
                    relationName: relationName || key
                });
            }
        });
        if (hasLocalizedField) {
            result._locales = many(localesTable, {
                relationName: '_locales'
            });
        }
        if (hasManyTextField) {
            result._texts = many(textsTable, {
                relationName: '_texts'
            });
        }
        if (hasManyNumberField) {
            result._numbers = many(numbersTable, {
                relationName: '_numbers'
            });
        }
        if (relationships.size && relationshipsTable) {
            result._rels = many(relationshipsTable, {
                relationName: '_rels'
            });
        }
        return result;
    });
    return {
        hasLocalizedManyNumberField,
        hasLocalizedManyTextField,
        hasLocalizedRelationshipField,
        hasManyNumberField,
        hasManyTextField,
        relationsToBuild
    };
}; //# sourceMappingURL=build.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/init.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "init": (()=>init)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/to-snake-case/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/createTableName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$executeSchemaHooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/utilities/executeSchemaHooks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/schema/build.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/drizzle-orm/pg-core/indexes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildCollectionFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/payload/dist/versions/buildGlobalFields.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const init = async function init() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$executeSchemaHooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeSchemaHooks"])({
        type: 'beforeSchemaInit',
        adapter: this
    });
    if (this.payload.config.localization) {
        this.enums.enum__locales = this.pgSchema.enum('_locales', this.payload.config.localization.locales.map(({ code })=>code));
    }
    this.payload.config.collections.forEach((collection)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
            adapter: this,
            config: collection
        });
        if (collection.versions) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                adapter: this,
                config: collection,
                versions: true,
                versionsCustomName: true
            });
        }
    });
    this.payload.config.collections.forEach((collection)=>{
        const tableName = this.tableNameMap.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collection.slug));
        const baseExtraConfig = {};
        if (collection.upload.filenameCompoundIndex) {
            const indexName = `${tableName}_filename_compound_idx`;
            baseExtraConfig.filename_compound_index = (cols)=>{
                const colsConstraint = collection.upload.filenameCompoundIndex.map((f)=>{
                    return cols[f];
                });
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f$drizzle$2d$orm$2f$pg$2d$core$2f$indexes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueIndex"])(indexName).on(colsConstraint[0], ...colsConstraint.slice(1));
            };
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
            adapter: this,
            baseExtraConfig,
            disableNotNull: !!collection?.versions?.drafts,
            disableUnique: false,
            fields: collection.fields,
            tableName,
            timestamps: collection.timestamps,
            versions: false
        });
        if (collection.versions) {
            const versionsTableName = this.tableNameMap.get(`_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$to$2d$snake$2d$case$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(collection.slug)}${this.versionsSuffix}`);
            const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(this.payload.config, collection);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
                adapter: this,
                disableNotNull: !!collection.versions?.drafts,
                disableUnique: true,
                fields: versionFields,
                tableName: versionsTableName,
                timestamps: true,
                versions: true
            });
        }
    });
    this.payload.config.globals.forEach((global)=>{
        const tableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
            adapter: this,
            config: global
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
            adapter: this,
            disableNotNull: !!global?.versions?.drafts,
            disableUnique: false,
            fields: global.fields,
            tableName,
            timestamps: false,
            versions: false
        });
        if (global.versions) {
            const versionsTableName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$createTableName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTableName"])({
                adapter: this,
                config: global,
                versions: true,
                versionsCustomName: true
            });
            const versionFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(this.payload.config, global);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$schema$2f$build$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTable"])({
                adapter: this,
                disableNotNull: !!global.versions?.drafts,
                disableUnique: true,
                fields: versionFields,
                tableName: versionsTableName,
                timestamps: true,
                versions: true
            });
        }
    });
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$utilities$2f$executeSchemaHooks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["executeSchemaHooks"])({
        type: 'afterSchemaInit',
        adapter: this
    });
}; //# sourceMappingURL=init.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/insert.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "insert": (()=>insert)
});
const insert = async function insert({ db, onConflictDoUpdate, tableName, values }) {
    const table = this.tables[tableName];
    let result;
    if (onConflictDoUpdate) {
        result = await db.insert(table).values(values).onConflictDoUpdate(onConflictDoUpdate).returning();
    } else {
        result = await db.insert(table).values(values).returning();
    }
    return result;
}; //# sourceMappingURL=insert.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/requireDrizzleKit.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "requireDrizzleKit": (()=>requireDrizzleKit)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (module, cjs)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/requireDrizzleKit.js")}`;
    }
};
;
const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
const requireDrizzleKit = ()=>require('drizzle-kit/api'); //# sourceMappingURL=requireDrizzleKit.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/types.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/exports/postgres.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
 //# sourceMappingURL=postgres.js.map
}}),
"[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/exports/postgres.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$countDistinct$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/countDistinct.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createDatabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createDatabase.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$convertPathToJSONTraversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/convertPathToJSONTraversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createJSONQuery$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createJSONQuery/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$createMigration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/createMigration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$defaultSnapshot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/defaultSnapshot.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$deleteWhere$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/deleteWhere.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$dropDatabase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/dropDatabase.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$execute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/execute.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$getMigrationTemplate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/getMigrationTemplate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/init.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$insert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/insert.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$requireDrizzleKit$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/requireDrizzleKit.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$postgres$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/postgres/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$payloadcms$2f$db$2d$postgres$2f$node_modules$2f40$payloadcms$2f$drizzle$2f$dist$2f$exports$2f$postgres$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@payloadcms/db-postgres/node_modules/@payloadcms/drizzle/dist/exports/postgres.js [app-rsc] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=5a113_%40payloadcms_drizzle_dist_34f405._.js.map