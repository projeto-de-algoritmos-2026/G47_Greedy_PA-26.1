def calculate_metrics(before_route, after_route):

    before_distance = sum(item["distance"] for item in before_route)
    after_distance = sum(item["distance"] for item in after_route)

    before_delay = sum(item["delay"] for item in before_route)
    after_delay = sum(item["delay"] for item in after_route)

    savings = before_distance - after_distance

    savings_percent = 0

    if before_distance > 0:
        savings_percent = (savings / before_distance) * 100

    details = []

    for before, after in zip(before_route, after_route):

        details.append({
            "delivery": before["delivery"],

            "before_distance": before["distance"],
            "after_distance": after["distance"],

            "before_delay": before["delay"],
            "after_delay": after["delay"],

            "saved": before["distance"] - after["distance"]
        })

    return {
        "before_distance": before_distance,
        "after_distance": after_distance,

        "before_delay": before_delay,
        "after_delay": after_delay,

        "savings": savings,
        "savings_percent": round(savings_percent, 2),

        "details": details
    }
