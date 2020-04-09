using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BushMovement : MonoBehaviour
{
    private Rigidbody2D rb;
    private Renderer renderer;
    private bool hasAppeared = false;
    public float movementSpeed;

    // Start is called before the first frame update
    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
        renderer = GetComponent<Renderer>();
    }

    // Update is called once per frame
    void Update()
    {
        rb.velocity = new Vector2(movementSpeed * -1, rb.velocity.y);

        if (renderer.isVisible)
        {
            hasAppeared = true;
        }
        else if(hasAppeared)
        {
            Destroy(gameObject);
        }
    }
}
