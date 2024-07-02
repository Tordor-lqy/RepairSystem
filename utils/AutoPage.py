from flask import abort
from utils.Result import *


def auto_page(p, s, query, schemas):
    try:
        p = int(p)
        s = int(s)
    except Exception as e:
        abort(400, error(msg=f"Invalid {e}"))
    if p < 1 or s < 1:
        abort(400, error(msg="参数错误"))
    total_count = query.count()
    configs = query.offset((p - 1) * s).limit(s).all()
    result = {
        "total": total_count,
        "records": schemas.dump(configs)
    }
    return result
