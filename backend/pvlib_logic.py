#Logic with pvlib

from pvlib.location import Location
from datetime import datetime
import numpy as np
import pandas as pd

def get_optimal_tilt_azimuth(lat, lon, season="yearly"):
    site = Location(lat, lon, tz="UTC")
    times = site.get_solarposition(times=pd.date_range(start='2023-01-01', end='2023-12-31', freq='1D'))

    # Aproximaciones típicas:
    if season == "summer":
        tilt = lat * 0.9 - 23.5
    elif season == "winter":
        tilt = lat * 0.9 + 23.5
    else:
        tilt = lat * 0.9

    azimuth = 180  # Sur en el hemisferio norte, cambiar según hemisferio
    if lat < 0:
        azimuth = 0  # Norte en hemisferio sur

    return {
        "optimal_tilt": round(tilt, 2),
        "optimal_azimuth": azimuth
    }