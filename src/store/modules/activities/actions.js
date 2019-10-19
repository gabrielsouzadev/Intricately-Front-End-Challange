const getActivities = (context) => {
    var mockup = [
        {
            "id": 1,
            "days": 8,
            "src": "src/images/activities/video-platform.png",
            "name": "Cloud Ochestration",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 2,
            "days": 10,
            "src": "src/images/activities/content-delivery.png",
            "name": "Express Scripts",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 3,
            "days": 12,
            "src": "src/images/activities/waf-d-dos-security.png",
            "name": "Kaiser Permanente",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 4,
            "days": 14,
            "src": "src/images/activities/traffic-management.png",
            "name": "Molina Healthcare",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 5,
            "days": 15,
            "src": "src/images/activities/dns.png",
            "name": "Express Scripts",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 6,
            "days": 16,
            "src": "src/images/activities/performance-monitoring.png",
            "name": "Kaiser Permanente",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 7,
            "days": 17,
            "src": "src/images/activities/saas.png",
            "name": "Molina Healthcare",
            "replaced": "Microsoft",
            "properties": 1,
            "launched": null
        },
        {
            "id": 8,
            "days": 18,
            "src": "src/images/activities/content-delivery.png",
            "name": "Microsoft",
            "replaced": null,
            "properties": 0,
            "launched": "M-Cloud"
        }
    ];

    context.commit('ACTIVITIES_UPDATE', mockup);
};

export default {
    getActivities
}