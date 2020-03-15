using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GrassScroll : MonoBehaviour
{
    private Material material;

    public float speed;

    private void Awake()
    {
        material = GetComponent<Renderer>().material;
    }
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        Vector2 offset = new Vector2(speed, 0);
        material.mainTextureOffset += offset * Time.deltaTime;
    }
}
