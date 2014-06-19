/**
 *
 * @license   http://www.gnu.org/licenses/gpl.html GPL Version 2
 * @author    Gerik Bonaert <dev@adaxisoft.be>
 * @copyright Copyright (c) 2013 Gerik Bonaert
 *
 * Couchpotato for OpenMediaVault is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * any later version.
 *
 * OpenMediaVault is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with OpenMediaVault. If not, see <http://www.gnu.org/licenses/>.
 */

// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/panel/Panel.js")

Ext.define("OMV.module.admin.service.couchpotato.WebInterface", {
    extend : "OMV.workspace.panel.Panel",

    initComponent : function() {
        var me = this;



        me.html = "<a href='http://" + location.hostname + ":5050'>Backup link</a>";
        // var link = "http://" + location.hostname + "/couchpotato/";
        // me.html += "<iframe src='" + link + "' sandbox='allow-same-origin allow-forms allow-scripts' width='100%' height='100%' />";

        me.callParent(arguments);
    }
});

OMV.WorkspaceManager.registerPanel({
    id        : "webinterface",
    path      : "/service/couchpotato",
    text      : _("Web Interface"),
    position  : 20,
    className : "OMV.module.admin.service.couchpotato.WebInterface"
});