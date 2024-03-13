"""Utils module."""
import logging
import re

_CLEAN_HTML_REGEX = re.compile("<.*?>")


def setup_logging():
    """Set up the logging module."""
    logging.basicConfig(level=logging.INFO,
                        format="%(asctime)s - %(levelname)s:  %(message)s",
                        datefmt="%Y-%m-%d %H:%M:%S")
