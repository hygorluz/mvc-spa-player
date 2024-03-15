"""Utils module."""
import logging
import re
import json
from typing import List, Optional

from controllers.configs import configs
from models.schemas import Music

_CLEAN_HTML_REGEX = re.compile("<.*?>")
_MUSICS_DATA: Optional[List[Music]] = None


def setup_logging():
    """Set up the logging module."""
    logging.basicConfig(level=logging.INFO,
                        format="%(asctime)s - %(levelname)s:  %(message)s",
                        datefmt="%Y-%m-%d %H:%M:%S")


def _load_musics() -> List[Music]:
    """Load the musics from a JSON file"""
    musics_json = None
    musics: List[Music] = []
    with open(configs.music_file_path) as music_file:
        musics_json = json.load(music_file)

    for music_json in musics_json['musics']:
        musics.append(Music(id=int(music_json["id"]),
                            title=music_json["title"],
                            image=music_json["image"],
                            artist=music_json["artist"],
                            src=music_json["src"]))
    return musics


def get_music_data():
    """Create the music data global."""
    global _MUSICS_DATA
    if not _MUSICS_DATA:
        logging.info("Loading music from file.")
        music_data = _load_musics()
        if music_data:
            _MUSICS_DATA = music_data
    return _MUSICS_DATA
