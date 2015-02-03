if (_.isUndefined(window.oc2)) {
    window.oc2 = {};

    // Simulates PHP's date function
    Date.prototype.format=function(e){var t="";var n=Date.replaceChars;for(var r=0;r<e.length;r++){var i=e.charAt(r);if(r-1>=0&&e.charAt(r-1)=="\\"){t+=i}else if(n[i]){t+=n[i].call(this)}else if(i!="\\"){t+=i}}return t};Date.replaceChars={shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d:function(){return(this.getDate()<10?"0":"")+this.getDate()},D:function(){return Date.replaceChars.shortDays[this.getDay()]},j:function(){return this.getDate()},l:function(){return Date.replaceChars.longDays[this.getDay()]},N:function(){return this.getDay()+1},S:function(){return this.getDate()%10==1&&this.getDate()!=11?"st":this.getDate()%10==2&&this.getDate()!=12?"nd":this.getDate()%10==3&&this.getDate()!=13?"rd":"th"},w:function(){return this.getDay()},z:function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil((this-e)/864e5)},W:function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil(((this-e)/864e5+e.getDay()+1)/7)},F:function(){return Date.replaceChars.longMonths[this.getMonth()]},m:function(){return(this.getMonth()<9?"0":"")+(this.getMonth()+1)},M:function(){return Date.replaceChars.shortMonths[this.getMonth()]},n:function(){return this.getMonth()+1},t:function(){var e=new Date;return(new Date(e.getFullYear(),e.getMonth(),0)).getDate()},L:function(){var e=this.getFullYear();return e%400==0||e%100!=0&&e%4==0},o:function(){var e=new Date(this.valueOf());e.setDate(e.getDate()-(this.getDay()+6)%7+3);return e.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).substr(2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return Math.floor(((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)*1e3/24)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){return((this.getHours()%12||12)<10?"0":"")+(this.getHours()%12||12)},H:function(){return(this.getHours()<10?"0":"")+this.getHours()},i:function(){return(this.getMinutes()<10?"0":"")+this.getMinutes()},s:function(){return(this.getSeconds()<10?"0":"")+this.getSeconds()},u:function(){var e=this.getMilliseconds();return(e<10?"00":e<100?"0":"")+e},e:function(){return"Not Yet Supported"},I:function(){var e=null;for(var t=0;t<12;++t){var n=new Date(this.getFullYear(),t,1);var r=n.getTimezoneOffset();if(e===null)e=r;else if(r<e){e=r;break}else if(r>e)break}return this.getTimezoneOffset()==e|0},O:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+"00"},P:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+":00"},T:function(){var e=this.getMonth();this.setMonth(0);var t=this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/,"$1");this.setMonth(e);return t},Z:function(){return-this.getTimezoneOffset()*60},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.toString()},U:function(){return this.getTime()/1e3}}
}

// CHANGE ME WHEN UPDATING PUBLICATIONS //

oc2.publications = [{"entrytype":"Article","title":"Low-Complexity Power-Efficient Schedulers for LTE Uplink with Delay-Sensitive Traffic","author":"M. Kalil, A. Shami, A. Al-Dweik, and S. Muhaidat","journal":"IEEE Transactions on Vehicular Technologies","volume":"","pages":"","year":"2015"},{"entrytype":"Article","title":"Hailing the Cloud Empowered Radio Access Networks (CRAN)","author":"K. M. Meerja, A. Shami, and A. Refaey","journal":"IEEE Wireless Communications","volume":"","pages":"","year":"2015"},{"entrytype":"Article","title":"DFVisor: A Distributed FlowVisor Platform for QoS awared Cloud Network Virtualization","author":"Lingxia Liao, A. Shami, V. C.M. Leung","journal":"IET Networks Journal","volume":"","pages":"","year":"2015"},{"entrytype":"Article","title":"QoS-Aware Power-Efficient Scheduler for LTE Uplink","author":"M. Kalil, A. Shami, and A. Al-Dweik","journal":"IEEE Transactions on Mobile Computing","volume":"","pages":"","year":"2015"},{"entrytype":"Article","title":"NFV: State of the Art, Challenges and Implementation in Next Generation Mobile Networks (vEPC)","author":"H. Hawilo, A. Shami, M. Mirahmadi, and A. Asal","journal":"IEEE Network","volume":"","pages":"","year":"2014"},{"entrytype":"Article","title":"Software defined networking: State of the art and research challenges,","author":"M. Jammal, T. Singh, A. Shami, R. Asal, Y. Li","journal":"Computer Networks Journal","volume":"72","pages":"74-98","year":"2014"},{"entrytype":"Article","title":"Concurrent Multipath Transfer using SCTP: Modelling and Congestion Window Management","author":"T.D. Wallace, and A. Shami","journal":"IEEE Transactions on Mobile Computing","volume":"13","pages":"2510-2523","year":"2014"},{"entrytype":"Article","title":"Intelligent Consensus Modeling for Proline Cis-Trans Isomerization Prediction","author":"P. D. Yoo, S. Muhaidat, K. Taha, J. Bentahar, and A. Shami","journal":"IEEE/ACM Transactions on Computational Biology and Bioinformatics.","volume":"","pages":"","year":"2014"},{"entrytype":"Article","title":"Opportunistic Spectrum Access in Cognitive Radio Networks Under Imperfect Spectrum Sensing","author":"O. Altrad, S. Muhaidat, A. Al-Dweik, and A. Shami","journal":"IEEE Transactions on Vehicular Technology","volume":"63","pages":"920-925","year":"2014"},{"entrytype":"Article","title":"Interference Modeling and Performance Evaluation of Heterogeneous Cellular Networks","author":"M. Mirahmadi, A. Al-Dweik, and A. Shami","journal":"IEEE Transactions on Communications","volume":"62","pages":"2132-2144","year":"2014"},{"entrytype":"Article","title":"Energy-Aware Resource Allocation Strategies for LTE Uplink with Synchronous HARQ Constraints","author":"D. Dechene and A. Shami","journal":"IEEE Transactions on Mobile Computing","volume":"13","pages":"422-433","year":"2014"},{"entrytype":"Article","title":"BER Reduction of OFDM Based Broadband Communication Systems over Multipath Channels with Impulsive Noise","author":"M. Mirahmadi, A. Al-Dweik, and A. Shami","journal":"IEEE Transactions on Communications","volume":"61","pages":"4602-4615","year":"2013"},{"entrytype":"Article","title":"Adaptive Hybrid ARQ System using Turbo Product Codes with Hard/Soft Decoding","author":"H. H. Mukhtar, A. Al-Dweik, M. Mualla, and A. Shami","journal":"IEEE Communications Letters","volume":"17","pages":"2132-2135","year":"2013"},{"entrytype":"Article","title":"Resource Allocation in a Network-Based Cloud Computing Environment: Design Challenges","author":"M Abu Sharkh, M Jammal, A Shami, A Ouda","journal":"IEEE Communications Magazine","volume":"51","pages":"46-52","year":"2013"},{"entrytype":"Article","title":"Comprehensive Investigation of Wireless LAN for IEC 61850 Based Smart Distribution Applications","author":"P. Parikh, T. Sidhu, and A. Shami","journal":"IEEE Transactions on Industrial Informatics","volume":"9","pages":"1466-1476","year":"2013"},{"entrytype":"Article","title":"Wireless Security: Securing Mobile UMTS Communications from interoperation of GSM","author":"E. Southern, A. Ouda and A. Shami","journal":"Wiley Journal on Security and Communication Networks","volume":"6","pages":"498-508","year":"2013"},{"entrytype":"Article","title":"QoS Design, implementation, and evaluation of an FPGAbased WLAN synchronizer","author":"C. Kennedy, D. Dechene, and A. Shami","journal":"Wiley Wireless Communications and Mobile Computing Journal,","volume":"13","pages":"1082-1094","year":"2013"},{"entrytype":"Article","title":"Energy efficient QoS constrained scheduler for SC-FDMA uplink","author":"D. Dechene and A. Shami","journal":"Elsevier Physical Communications","volume":"8","pages":"81-90","year":"2013"},{"entrytype":"Article","title":"Power Efficient Scheduling Over Fading Channel For Cross-Layer Optimization","author":"X. Bai, A. Shami, S. Primak","journal":"Wiley Wireless Communications and Mobile Computing Journal","volume":"12","pages":"1215-1224","year":"2012"},{"entrytype":"Article","title":"A Review of Multihoming Issues using the Stream Control Transmission Protocol","author":"T. D. Wallace and A. Shami","journal":"IEEE Communications Surveys and Tutorials","volume":"14","pages":"565-578","year":"2012"},{"entrytype":"Article","title":"RPR-EPON-WiMAX Hybrid Network: A Solution for Access and Metro Networks","author":"M. Mirahmadi and A. Shami","journal":"IEEE/OSA Journal of Optical Communications and Networking","volume":"4","pages":"173-188","year":"2012"},{"entrytype":"Article","title":"Traffic-Prediction-Assisted Dynamic Bandwidth Assignment for Hybrid Optical Wireless Networks","author":"M. Mirahmadi and A. Shami","journal":"Elsevier Computer Networks Journal","volume":"56","pages":"244-259","year":"2012"},{"entrytype":"Article","title":"QoS, Channel and Energy-Aware Packet Scheduling over Multiple Channels","author":"D. Dechene and A. Shami","journal":"IEEE Transactions on Wireless Communications","volume":"10","pages":"1058-1062","year":"2011"},{"entrytype":"Article","title":"Energy Efficient Quality of Service Traffic Scheduler for MIMO Downlink SVD Channels","author":"D. Dechene and A. Shami","journal":"IEEE Transactions on Wireless Communications","volume":"9","pages":"3750-3761","year":"2010"},{"entrytype":"Article","title":"Analysis of Enhanced Collision Avoidance Scheme Proposed for IEEE 802.11e-Enhanced Distributed Channel Access Protocol","author":"K. Meerja and A. Shami","journal":"IEEE Transactions on Mobile Computing","volume":"8","pages":"1353-1367","year":"2009"},{"entrytype":"Article","title":"Cross-Layer Optimization of Network Performance over MIMO Wireless Mobile Channels","author":"M. Luccini, A. Shami, S. Primak","journal":"IET Communications Journal","volume":"4","pages":"683-696","year":"2010"},{"entrytype":"Article","title":"Robust QoS Control for Single Carrier PMP Mode IEEE 802.16 System","author":"X. Bai, A. Shami, and Y. Ye","journal":"IEEE Transactions on Mobile Computing","volume":"7","pages":"416-429","year":"2008"},{"entrytype":"Article","title":"Performance Evaluation of MIMO-Aware Media Access Control Protocol","author":"D. Dechene, K. Meerja, A. Shami","journal":"Elsevier Physical Communication Journal","volume":"2","pages":"204-216","year":"2009"},{"entrytype":"Article","title":"Towards Quality-of-Service Protection in Ethernet Passive Optical Networks: Challenges and Solutions","author":"C. Assi, M. Maier, and A. Shami","journal":"IEEE Network, Special Issue on Advances in Broadband Access Networks","volume":"21","pages":"12-19","year":"2007"},{"entrytype":"Article","title":"Value-added services in next-generation SONET/SDH networks","author":"N. Ghani, L. Qing, A. Gumaste, A. Shami et al.","journal":"IEEE Communications Magazine","volume":"46","pages":"64-73","year":"2008"},{"entrytype":"Article","title":"Analytical and Experimental Study on Ethernet Passive Optical Networks: Challenges and Solutions","author":"X. Bai, A. Shami, and Y. Ye","journal":"International Journal of Communication Networks and Distributed Systems","volume":"2","pages":"138-159","year":"2009"},{"entrytype":"Article","title":"Scheduling Advance Reservation Requests for WDM Networks with Static Traffic Demands","author":"T. D. Wallace, A. Shami, and C. Assi","journal":"IEE Proceedings on Communications","volume":"2","pages":"1023-1033","year":"2008"},{"entrytype":"Article","title":"QoSAnalysis of New Distributed Media Access Control Protocols Proposed for IEEE 802.11 Wireless Local Area Networks","author":"K. A. Meerja, and A. Shami","journal":"IEEE Transactions on Vehicular Technologies","volume":"56","pages":"1797-1812","year":"2007"},{"entrytype":"Article","title":"Advance lightpath reservation for WDM networks with dynamic traffic","author":"T. Daniel Wallace, A. Shami, and C. Assi","journal":"OSA Journal of Optical Networking","volume":"6","pages":"913-924","year":"2007"},{"entrytype":"Article","title":"Dynamic Wavelength and Bandwidth Allocation in Hybrid TDM/WDM Ethernet Passive Optical Networks (EPONs)","author":"A. Dhaini, C. Assi, M. Maier, A. Shami","journal":"IEEE/OSA Journal of Lightwave Technology","volume":"25","pages":"277-286","year":"2007"},{"entrytype":"Article","title":"Enhancing channel utilization by improving media access coordination in wireless local area networks","author":"K. A. Meerja, and A. Shami","journal":"Wiley's Wireless Communications and Mobile Computing Journal","volume":"8","pages":"155-169","year":"2008"},{"entrytype":"Article","title":"Multiple link failures survivability of optical networks with traffic grooming capability","author":"C. Assi, W. Huo, and A. Shami","journal":"Elsevier Computer Communications Journal","volume":"29","pages":"3900-3912","year":"2006"},{"entrytype":"Article","title":"QoS On the Fairness of Dynamic Bandwidth Allocation Schemes in Ethernet Passive Optical Networks","author":"X. Bai, A. Shami, and C. Assi","journal":"Elsevier Computer Communications Journal","volume":"29","pages":"2123-2135","year":"2006"},{"entrytype":"Article","title":"Ring-based local access PON architecture for supporting private networking capability","author":"ASM Delowar Hossain, A. Shami, C. Assi, et al","journal":"OSA Journal of Optical Networking","volume":"5","pages":"26-39","year":"2006"},{"entrytype":"Article","title":"Dynamic Provisioning of Low-Speed Unicast/Multicast Traffic Demands in Mesh-Based WDM Optical Networks","author":"A. Khalil, A. Hadjiantonis, C. Assi, A. Shami, G. Ellinas, and M. A. Ali","journal":"IEEE/OSA Journal of Lightwave Technology","volume":"24","pages":"681-693","year":"2006"},{"entrytype":"Article","title":"Improving Signaling Recovery in Shared Mesh Optical Networks","author":"C. Assi, W. Huo, A. Shami, and N. Ghani","journal":"Elsevier Computer Communications Journal","volume":"29","pages":"59-68","year":"2005"},{"entrytype":"Article","title":"QoS Control Schemes for Two-Stage Ethernet Passive Optical Access Networks","author":"A. Shami, X. Bai, N. Ghani, C. Assi and H. T. Mouftah","journal":"IEEE Journal on Selected Areas in Communications (IEEE JSAC)- (Optical Networking Regular Series)","volume":"28","pages":"1467-1478","year":"2005"},{"entrytype":"Article","title":"Analysis of Capacity Re-Provisioning in Optical Mesh Networks","author":"C. Assi, W. Huo, A. Shami, and N. Ghani","journal":"IEEE IEEE Communications Letters","volume":"9","pages":"558-560","year":"2005"},{"entrytype":"Article","title":"Jitter Performance in Ethernet Passive Optical Networks","author":"A. Shami, X. Bai, C. Assi, and N. Ghani","journal":"IEEE/OSA Journal of Lightwave Technology","volume":"23","pages":"1745-1753","year":"2005"},{"entrytype":"Article","title":"Intra-ONU Bandwidth Scheduling in Ethernet Passive Optical Networks","author":"N. Ghani, A. Shami, C. Assi, M. Y. A. Raja","journal":"IEEE Communications Letters","volume":"8","pages":"683-686","year":"2004"},{"entrytype":"Article","title":"Performance Evaluation of Shared Mesh Protection in WDM Networks","author":"C. Assi, A. Khalil, N. Ghani, A. Shami, M. Ali","journal":"Cluster Computing: The Journal of Networks, Software Tools, and Applications","volume":"","pages":"","year":"2004"},{"entrytype":"Article","title":"Connection Management Protocols for Dynamic Lightpath Provisioning in Future WDM Networks","author":"A. Shami , C. Assi, N. Ghani et al","journal":"Photonic Network Communications Journal, Kluwer Academic","volume":"6","pages":"25-32","year":"2003"},{"entrytype":"Article","title":"Integrated Routing/Signaling Protocols in   GMPLS-based Optical Networks”","author":"A. Shami, Y. Ye, C. Assi, S. Dixit, and M. Ali","journal":"SPIE Optical Networks","volume":"3","pages":"","year":"2002"},{"entrytype":"Article","title":"Integrated Routing Algorithms for Provisioning Sub-Wavelength Connections in IP-Over-WDM Networks","author":"C. Assi, A. Shami, Y. Ye and M. Ali","journal":"Photonic Network Communications Journal, Kluwer Academic","volume":"4","pages":"377-390","year":"2002"},{"entrytype":"Article","title":"Impact of Wavelength Converters on the Performance of Optical Networks","author":"C. Assi, A. Shami, M. Ali, Z.  Zhang, and X. Liu","journal":"SPIE Optical Networks","volume":"3","pages":"","year":"2002"},{"entrytype":"Article","title":"Optical Networking and Real-Time Provisioning; An Integrated Vision For The Next-Generation Internet","author":"C. Assi, A. Shami, et al.","journal":"IEEE Networks","volume":"15","pages":"36-45","year":"2001"},{"entrytype":"Article","title":"Architectural Options for the Next-Generation Networking Paradigm: Is Optical Internet the Answer?","author":"M. A Ali, A. Shami, C. Assi, Y. Ye and Russ Kurtz","journal":"Photonic Network Communications Journal, Kluwer Academic","volume":"3","pages":"","year":"2001"}]

//////////////////////////////////////////

// CONFIGURATION

/**
 * CSS Selectors
 *
 * @type {object}
 */
oc2.selectors = {
    /**
     * Select the <table> element on the loading page that will be populated by the publications in
     * oc2.publications.
     */
    table: '#pubsJournals',

    /**
     * The <input> element that users can search with
     */
    searchInput: '#search'
};

// END CONFIGURATION

// THERE BE DRAGONS DOWN HERE

oc2.publications = _.map(oc2.publications, function (o) {
    return _.extend(o, {'id' : _.uniqueId(o.entrytype + '_')});
});

document.addEventListener('DOMContentLoaded', function() {

    function buildTable(pubs) {
        var items = [];
        var date, jhtml, row;
        var authorCell;
        _.forEach(pubs, function (obj) {
            row = $('<tr/>').attr('id', obj.id);

            row.append($('<td/>', {
                html: obj.entrytype
            }).addClass('pub-entrytype'));

            if (obj.author) {
                authorCell = $('<td/>', {
                    html : obj.author
                });
            }
            row.append(authorCell.addClass('pub-author'));

            row.append($('<td/>', {html : obj.title}).addClass('pub-title'));

            jhtml = '';
            if (_.isString(obj.journal)) {
                jhtml = obj.journal;
                if (_.isString(obj.volume) && obj.volume.length > 0) {
                    jhtml += ', Volume ' + obj.volume;
                }

                // issue is not supported
                //if (!_.isUndefined(obj.issue)) {
                //    jhtml += ', Issue ' + obj.issue;
                //}
            }
            row.append($('<td/>', {
                html : jhtml
            }).addClass('pub-journal'));

            // year:
            row.append($('<td/>', { html : _.isUndefined(obj.year) ? '' : obj.year }).addClass('pub-date'));

            row.append($('<td/>', {
                html : _.isUndefined(obj.url) ? '' : '<a href="' + obj.url + '">pdf</a>'
            }).addClass('pub-link'));

            items.push(row);
        });

        var table = $(oc2.selectors.table);
        table.children('tbody').empty();

        items.forEach(function (v) {
            table.append(v);
        });

        table.tablesorter();
    }

    function showHideResults(ids) {
        var rows = $(oc2.selectors.table).find('tbody tr');
        var jrow;
        var sids = new Set(ids);
        $.each(rows, function (i, row) {
            jrow = $(row);
            if (sids.has(jrow.attr('id'))) {
                jrow.show();
            } else {
                jrow.hide();
            }
        });
    }

    var escapeInput = (function () {
        var re = /[\-\[\]\/\{}\(\)\*\+\?\.\\\^\$\|]/g;
        return function (str) {
            return str.replace(re, '\\$&');
        }
    })();

    // use ../ since this will be called from the page itself, not this file's
    // location
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.18.4/js/jquery.tablesorter.js", function () {

        $('#search').keyup(_.debounce(function() {

            if (this.value.length <= 0) {
                return;
            }
            
            function buildRegFilter(matchStr, key) {
                return (function () {
                    var re = new RegExp(matchStr, 'i');
                    return function (p) {
                        return re.test(p[key]);
                    };
                })();
            }

            var inVals = escapeInput(this.value).split(/\s+/);
            var predicates = _.chain(inVals).map((function () {
                var re = /([aeytj]):(?:['"](?=['"]))?([\w\s]+)?"?/;

                return function (i) {
                    if (i.length === 0) {
                        return undefined;
                    }

                    var res = re.exec(i);

                    if (!_.isNull(res) && res.index > -1) {
                        var term = _.isString(res[2]) ? res[2].trim() : "";
                        // check if the second capture is empty, we do this so that a value tag doesn't cause all
                        // values to be hidden because `a:` can't be found, we just ignore it instead
                        if (term.length <= 0) {
                            return undefined;
                        }

                        switch (res[1]) {
                            case 'e':
                                return buildRegFilter('.*' + term + '.*', 'entrytype');
                            case 'j':
                                return buildRegFilter('.*' + term + '.*', 'journal');
                            case 'a':
                                return buildRegFilter('.*' + term + '.*', 'author');
                            case 't':
                                return buildRegFilter('.*' + term + '.*', 'title');
                            case 'y':
                                return buildRegFilter('\\d*' + term + '\\d*', 'year');
                        }
                    } else {
                        return (function () {
                            var re = new RegExp('.*' + i + '.*', 'i');
                            return function (p) {
                                return re.test(p.author) ||
                                    re.test(p.title)   ||
                                    re.test(p.journal) ||
                                    (_.isString(p.year) ? re.test(p.year) : false);
                            };
                        })();
                    }
                }
            })()).compact().value();

            var singlePredicate = function (p) {
                var i = 0;
                for (; i < predicates.length; ++i ) {
                    if (!predicates[i](p)) {
                        return false;
                    }
                }

                return true;
            };

            var show = _.chain(oc2.publications).filter(singlePredicate).pluck('id').value();

            showHideResults(show);
        }, 100));


        buildTable(oc2.publications);
    });


});